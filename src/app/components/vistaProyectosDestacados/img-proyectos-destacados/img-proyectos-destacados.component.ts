import { Component, OnInit } from '@angular/core';

import { DbService } from '../../../services/db/db.service';
import { DB } from '../../../models/dbDatos.models';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { FeatureSection } from '../../../models/type/firebase.type';

@Component({
  selector: 'app-img-proyectos-destacados',
  imports: [],
  templateUrl: './img-proyectos-destacados.component.html',
  styleUrl: './img-proyectos-destacados.component.css',
})
export class ImgProyectosDestacadosComponent implements OnInit {
  db: DB;
  constructor(
    private dbService: DbService,
    private readonly fb: FirebaseService
  ) {}
  
  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService?.enableDbFirebase) {
      this.db = await this.fb.getDB();
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.db = respuesta;
      });
    }
  }
}
