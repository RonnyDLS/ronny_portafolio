import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DbService } from '../../../services/db/db.service';
import { DB } from '../../../models/dbDatos.models';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { Proyecto } from '../../../models/Proyectos.models';
import { ProyectoDestacadoResumenComponent } from '../proyecto-destacado-resumen/proyecto-destacado-resumen.component';
import { FeatureSection } from '../../../models/type/firebase.type';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { CommonModule } from '@angular/common';
import { ImgProyectosComponent } from "../../vistaProyectos/img-proyectos/img-proyectos.component";

@Component({
  selector: 'app-proyectos-destacados',
  imports: [
    RouterModule,
    CommonModule,
    ImgProyectosComponent
],
  templateUrl: './proyectos-destacados.component.html',
  styleUrl: './proyectos-destacados.component.css',
})
export class ProyectosDestacadosComponent implements OnInit {
  // Insertar componente resumen
  @ViewChild('proyectoDestacadoResumen', { read: ViewContainerRef })
  proyectoResumen!: ViewContainerRef;
  isImgProyectosActive: boolean = true;
  db: DB;
  proyectosDestacados: Proyecto[] = [];
  constructor(
    private dbService: DbService,
    private proyectoService: EnviarProyectoService,
    private readonly fb: FirebaseService
  ) {}

  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();
    if (firebaseService?.enableDbFirebase) {
      this.db = await this.fb.getDB();
      for (let proyecto of this.db.proyectos) {
        if (proyecto.destacado === true) {
          this.proyectosDestacados.push(proyecto);
        }
      }
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.db = respuesta;

        for (let proyecto of this.db.proyectos) {
          if (proyecto.destacado === true) {
            this.proyectosDestacados.push(proyecto);
          }
        }
      });
    }
  }

  cargarComponente(proyectoDestacado: Proyecto) {
    this.isImgProyectosActive = false;
    this.proyectoService.setProyectoDestacado(proyectoDestacado);
    this.proyectoResumen.clear();
    this.proyectoResumen.createComponent(ProyectoDestacadoResumenComponent);
  }
}
