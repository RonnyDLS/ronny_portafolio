import { Component } from '@angular/core';
import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { Proyecto } from '../../../models/Proyectos.models';
import { Router } from '@angular/router';
import { ImgProyectosComponent } from '../img-proyectos/img-proyectos.component';
import { FeatureSection } from '../../../models/type/firebase.type';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { pathDbFirebase } from '../../../models/enum/pathDbFirebase.enum';

@Component({
  selector: 'app-proyecto-mobile',
  imports: [ImgProyectosComponent],
  templateUrl: './proyecto-mobile.component.html',
  styleUrl: './proyecto-mobile.component.css',
})
export class ProyectoMobileComponent {
  db: DB;
  proyecto: Proyecto;
  constructor(
    private dbService: DbService,
    private proyectoService: EnviarProyectoService,
    private router: Router,
    private readonly fb: FirebaseService
  ) {}

  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService?.enableDbFirebase) {
      this.db = this.proyecto = await this.fb.getObjDB(pathDbFirebase.DB_MYPORTAFOLIOWEB);
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.db = respuesta;
      });
    }
  }

  irAlProyecto(proyecto: Proyecto) {
    this.proyecto = proyecto;
    this.proyectoService.setProyecto(proyecto);
    this.router.navigate(['/proyectos_descripcion']);
  }
}
