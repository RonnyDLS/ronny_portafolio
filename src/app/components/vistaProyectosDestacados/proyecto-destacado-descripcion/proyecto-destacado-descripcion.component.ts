import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DB } from '../../../models/dbDatos.models';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { DbService } from '../../../services/db/db.service';
import { Proyecto } from '../../../models/Proyectos.models';
import { VideoComponent } from '../../generic-components/video/video.component';
import { FeatureSection } from '../../../models/type/firebase.type';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { pathDbFirebase } from '../../../models/enum/pathDbFirebase.enum';

@Component({
  selector: 'app-proyecto-destacado-descripcion',
  imports: [CommonModule, VideoComponent],
  templateUrl: './proyecto-destacado-descripcion.component.html',
  styleUrl: './proyecto-destacado-descripcion.component.css',
})
export class ProyectoDestacadoDescripcionComponent implements OnInit {
  proyectoDestacado: Proyecto;
  db: DB;
  idProyectoDestacado: string;
  viewVideo: boolean = false;
  viewImgs: boolean = true;

  constructor(
    private proyectoService: EnviarProyectoService,
    private dbService: DbService,
    private readonly fb: FirebaseService
  ) {}
  async ngOnInit(): Promise<void> {
    this.proyectoDestacado = this.proyectoService.getProyectoDestacado();

    if (typeof window !== 'undefined') {
      if (this.proyectoDestacado) {
        localStorage.setItem(
          'id_p_des_destacado',
          JSON.stringify(this.proyectoDestacado.id)
        );
      }
      this.idProyectoDestacado = JSON.parse(
        localStorage.getItem('id_p_des_destacado')
      );

      const firebaseService: FeatureSection = await this.fb.getFeatureSection();
      if (firebaseService?.enableDbFirebase) {
        this.db = await this.fb.getObjDB(pathDbFirebase.DB_MYPORTAFOLIOWEB);
        this.proyectoDestacado = this.db.proyectos.filter(
          (p) => p.id === this.idProyectoDestacado
        )[0];
      } else {
        this.dbService.getDB().subscribe((respuesta) => {
          this.db = respuesta;
          this.proyectoDestacado = this.db.proyectos.filter(
            (p) => p.id === this.idProyectoDestacado
          )[0];
        });
      }
    }
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
