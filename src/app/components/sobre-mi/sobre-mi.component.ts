import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db/db.service';
import { DB } from '../../models/dbDatos.models';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { FeatureSection } from '../../models/type/firebase.type';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
})
export class SobreMiComponent implements OnInit {
  db: DB;

  constructor(
    private dbServicio: DbService,
    private readonly fb: FirebaseService
  ) {}

  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService.enableDbFirebase) {
      this.db = await this.fb.getDB();
    } else {
      this.dbServicio.getDB().subscribe((respuesta) => {
        this.db = respuesta;
      });
    }
  }
}
