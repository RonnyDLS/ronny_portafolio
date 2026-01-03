import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DbService } from '../../services/db/db.service';
import { DB } from '../../models/dbDatos.models';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { FeatureSection } from '../../models/type/firebase.type';

@Component({
  selector: 'app-descarga-curriculum-modal',
  imports: [],
  templateUrl: './descarga-curriculum-modal.component.html',
  styleUrl: './descarga-curriculum-modal.component.css',
})
export class DescargaCurriculumModalComponent implements OnInit {
  db: DB;
  @Output() eventoCerrar = new EventEmitter<void>();

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

  cerrarVentana() {
    this.eventoCerrar.emit();
  }
}
