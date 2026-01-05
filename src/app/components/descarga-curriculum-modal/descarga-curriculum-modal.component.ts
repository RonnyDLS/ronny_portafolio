import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DbService } from '../../services/db/db.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { FeatureSection } from '../../models/type/firebase.type';
import { pathDbFirebase } from '../../models/enum/pathDbFirebase.enum';

@Component({
  selector: 'app-descarga-curriculum-modal',
  imports: [],
  templateUrl: './descarga-curriculum-modal.component.html',
  styleUrl: './descarga-curriculum-modal.component.css',
})
export class DescargaCurriculumModalComponent implements OnInit {
  sourceImg: string;
  @Output() eventoCerrar = new EventEmitter<void>();

  constructor(
    private dbService: DbService,
    private readonly fb: FirebaseService
  ) {}

  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService?.enableDbFirebase) {
      this.sourceImg = await this.fb.getObjDB(`${pathDbFirebase.IMAGENES}/2`);     
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.sourceImg = respuesta.imagenes[2];
      });
    }
  }

  cerrarVentana() {
    this.eventoCerrar.emit();
  }
}
