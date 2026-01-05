import {
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ProyectoResumenComponent } from '../proyecto-resumen/proyecto-resumen.component';
import { RouterOutlet } from '@angular/router';
import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { Proyecto } from '../../../models/Proyectos.models';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { FeatureSection } from '../../../models/type/firebase.type';
import { CommonModule } from '@angular/common';
import { ImgProyectosComponent } from "../img-proyectos/img-proyectos.component";
import { pathDbFirebase } from '../../../models/enum/pathDbFirebase.enum';

@Component({
  selector: 'app-proyectos',
  imports: [
    RouterOutlet,
    CommonModule,
    ImgProyectosComponent
],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  // Insertar componente resumen
  @ViewChild('proyectoResumen', { read: ViewContainerRef })
  proyectoResumen!: ViewContainerRef;
  db: DB;
  isImgProyectosActive: boolean = true;

  constructor(
    private dbService: DbService,
    private proyectoService: EnviarProyectoService,
    private readonly fb: FirebaseService
  ) {}

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

  // Cargar el componente de resumen
  cargarComponente(proyecto: Proyecto) {
    this.isImgProyectosActive = false;
    this.proyectoService.setProyecto(proyecto);
    this.proyectoResumen.clear();
    this.proyectoResumen.createComponent(ProyectoResumenComponent);
  }
}
