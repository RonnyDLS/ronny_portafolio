import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { DbService } from '../../../services/db/db.service';
import { DB } from '../../../models/dbDatos.models';
import { Proyecto } from '../../../models/Proyectos.models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoComponent } from '../../generic-components/video/video.component';
import { FeatureSection } from '../../../models/type/firebase.type';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-proyecto-descripcion',
  imports: [CommonModule, VideoComponent],
  templateUrl: './proyecto-descripcion.component.html',
  styleUrl: './proyecto-descripcion.component.css',
})
export class ProyectoDescripcionComponent implements OnInit {
  proyecto: Proyecto;
  db: DB;
  idProyecto: string;
  viewVideo: boolean = false;
  viewImgs: boolean = true;

  constructor(
    private proyectoService: EnviarProyectoService,
    private dbService: DbService,
    private sanitizer: DomSanitizer,
    private readonly fb: FirebaseService
  ) {}
  async ngOnInit(): Promise<void> {
    this.proyecto = this.proyectoService.getProyecto();

    if (typeof window !== 'undefined') {
      if (this.proyecto) {
        localStorage.setItem('id_p_des', JSON.stringify(this.proyecto.id));
      }
      this.idProyecto = JSON.parse(localStorage.getItem('id_p_des'));

      const firebaseService: FeatureSection = await this.fb.getFeatureSection();
      if (firebaseService.enableDbFirebase) {
        this.db = await this.fb.getDB();
        this.proyecto = this.db.proyectos.filter(
          (p) => p.id === this.idProyecto
        )[0];
      } else {
        this.dbService.getDB().subscribe((respuesta) => {
          this.db = respuesta;
          this.proyecto = this.db.proyectos.filter(
            (p) => p.id === this.idProyecto
          )[0];
        });
      }
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  clickVideo(): void {
    this.viewVideo = true;
    this.viewImgs = false;
  }

  clickimgs(): void {
    this.viewImgs = true;
    this.viewVideo = false;
  }
}
