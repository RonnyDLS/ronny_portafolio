import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db/db.service';
import { DB } from '../../models/dbDatos.models';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { FeatureSection } from '../../models/type/firebase.type';
import { pathDbFirebase } from '../../models/enum/pathDbFirebase.enum';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private dbService: DbService,
    private readonly fb: FirebaseService
  ) {}

  db: DB;

  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService?.enableDbFirebase) {
      this.db = await this.fb.getObjDB(pathDbFirebase.DB_MYPORTAFOLIOWEB); 
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.db = respuesta;
      });
    }
  }
}
