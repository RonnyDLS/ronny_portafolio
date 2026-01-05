import { Component, OnInit } from '@angular/core';
import { DbService } from '../../../services/db/db.service';
import { FeatureSection } from '../../../models/type/firebase.type';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { pathDbFirebase } from '../../../models/enum/pathDbFirebase.enum';

@Component({
  selector: 'app-img-proyectos',
  imports: [],
  templateUrl: './img-proyectos.component.html',
  styleUrl: './img-proyectos.component.css',
})
export class ImgProyectosComponent implements OnInit {
  sourceImg: string;
  constructor(
    public dbService: DbService,
    private readonly fb: FirebaseService
  ) {}
  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService?.enableDbFirebase) {
      this.sourceImg = await this.fb.getObjDB(`${pathDbFirebase.IMAGENES}/5`);  
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.sourceImg = respuesta.imagenes[5];
      });
    }
  }
}
