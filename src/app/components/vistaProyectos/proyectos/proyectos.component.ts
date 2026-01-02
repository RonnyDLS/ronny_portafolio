import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ProyectoResumenComponent } from '../proyecto-resumen/proyecto-resumen.component';
import { RouterOutlet } from '@angular/router';
import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { Proyecto } from '../../../models/Proyectos.models';
import { ImgProyectosComponent } from '../img-proyectos/img-proyectos.component';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { FeatureSection } from '../../../models/type/firebase.type';

@Component({
  selector: 'app-proyectos',
  imports: [RouterOutlet],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  // Insertar componente resumen
  @ViewChild('proyectoResumen', { read: ViewContainerRef })
  proyectoResumen!: ViewContainerRef;
  db: DB;
  imgComponente!: ComponentRef<ImgProyectosComponent>;

  constructor(
    private dbService: DbService,
    private proyectoService: EnviarProyectoService,
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

  // Eliminar el componente de img por defecto
  eliminarImgDefault() {
    this.imgComponente.destroy();
  }

  // Crear componente despues que las vistas terminen de mostrarse
  ngAfterViewInit(): void {
    this.imgComponente = this.proyectoResumen.createComponent(
      ImgProyectosComponent
    );
  }

  // Cargar el componente de resumen
  cargarComponente(proyecto: Proyecto) {
    this.proyectoService.setProyecto(proyecto);
    this.proyectoResumen.clear();
    this.proyectoResumen.createComponent(ProyectoResumenComponent);
  }
}
