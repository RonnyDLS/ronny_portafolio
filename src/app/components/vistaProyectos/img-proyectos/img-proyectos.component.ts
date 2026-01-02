import { Component, OnInit } from '@angular/core';

import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';
import { FeatureSection } from '../../../models/type/firebase.type';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-img-proyectos',
  imports: [],
  templateUrl: './img-proyectos.component.html',
  styleUrl: './img-proyectos.component.css',
})
export class ImgProyectosComponent implements OnInit {
  db: DB;
  constructor(
    public dbService: DbService,
    private readonly fb: FirebaseService
  ) {}
  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService.enableDbFirebase) {
      this.db = await this.fb.getDB();
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.db = respuesta;
      });
    }
  }
}
