import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import {
  getRemoteConfig,
  getString,
  RemoteConfig,
  fetchAndActivate,
} from 'firebase/remote-config';
import { FeatureSection } from '../../models/type/firebase.type';
import { DB } from '../../models/dbDatos.models';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private remoteConfig: RemoteConfig;
  private featureSection: any;
  private db: any;

  constructor() {
    const app: FirebaseApp = initializeApp(environment?.firebase);
    this.remoteConfig = getRemoteConfig(app);
    this.remoteConfig.settings.minimumFetchIntervalMillis = 0;
  }

  public async getFeatureSection(): Promise<FeatureSection> {
    await fetchAndActivate(this.remoteConfig);
    if(!this.featureSection){
      this.featureSection = getString(this.remoteConfig, 'featureSection');
    }

    if(!environment?.production)
    console.info('FeatureSection:', this.featureSection ? JSON.parse(this.featureSection) : '');
    return this.featureSection ? JSON.parse(this.featureSection) : null;
  }

  public async getDB(): Promise<DB> {
    await fetchAndActivate(this.remoteConfig);
    if(!this.db){
      this.db = getString(this.remoteConfig, 'db');
    }

    if(!environment?.production)
    console.info('Base de datos:', this.db ? JSON.parse(this.db) : '');
    return this.db ? JSON.parse(this.db) : null;
  }
}
