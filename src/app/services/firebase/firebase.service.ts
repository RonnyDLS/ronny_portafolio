import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import {
  getRemoteConfig,
  getString,
  RemoteConfig,
  fetchAndActivate,
} from 'firebase/remote-config';
import { getDatabase, onValue, ref } from 'firebase/database';
import { FeatureSection } from '../../models/type/firebase.type';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private remoteConfig: RemoteConfig;
  private featureSection: any;
  private dbMyPortafolioWeb: any;
  app: FirebaseApp;

  constructor() {
    this.app = initializeApp(environment?.firebase);
    this.remoteConfig = getRemoteConfig(this.app);
    this.dbMyPortafolioWeb = getDatabase();
    this.configMinimumFetchIntervalMillis_RemoteConfig();
  }

  private async configMinimumFetchIntervalMillis_RemoteConfig(): Promise<void> {
    let featureSection: FeatureSection = await this.getFeatureSection();
    if (featureSection.requestFirebaseAlltime)
      this.remoteConfig.settings.minimumFetchIntervalMillis = 0;
  }

  /*
  ==================================================
  >>>>>>>>>> Remote Config desde firebase <<<<<<<<<<
  ==================================================
  */

  public async getFeatureSection(): Promise<FeatureSection> {
    try {
      await fetchAndActivate(this.remoteConfig);
    } catch (error) {}

    if (!this.featureSection) {
      this.featureSection = getString(this.remoteConfig, 'featureSection');
    }

    if (!environment?.production)
      console.info(
        'FeatureSection:',
        this.featureSection ? JSON.parse(this.featureSection) : ''
      );
    return this.featureSection ? JSON.parse(this.featureSection) : null;
  }

  /*
  ======================================================
  >>>>>>>>>> Realtime Database desde firebase <<<<<<<<<<
  ======================================================
  */

  public getFullDB(): any {
    const starCountRef = ref(this.dbMyPortafolioWeb);
    onValue(starCountRef, (snapshot) => {
      const value = snapshot.val();

      if (!environment?.production) console.info('Base de datos:', value);
      return value;
    });
  }

  public getObjDB(path: string): Promise<any> {
    return firstValueFrom<any>(
      new Observable((sub) => {
        const starCountRef = ref(this.dbMyPortafolioWeb, path);
        onValue(
          starCountRef,
          (snapshot) => {
            const value = snapshot.val();

            if (!environment?.production) console.info('Base de datos:', value);
            return sub.next(value);
          },
          (err) => {
            if (!environment?.production)
              console.error(
                'Ha ocurrido un error al establecer la conexión de lectura con Firebase.',
                err
              );
          }
        );
      })
    );
  }
}
