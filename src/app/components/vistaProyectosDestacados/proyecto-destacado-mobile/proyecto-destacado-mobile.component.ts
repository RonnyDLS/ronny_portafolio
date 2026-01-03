import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from '../../../models/Proyectos.models';
import { ImgProyectosDestacadosComponent } from '../img-proyectos-destacados/img-proyectos-destacados.component';
import { FeatureSection } from '../../../models/type/firebase.type';
import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-proyecto-destacado-mobile',
  imports: [ImgProyectosDestacadosComponent],
  templateUrl: './proyecto-destacado-mobile.component.html',
  styleUrl: './proyecto-destacado-mobile.component.css',
})
export class ProyectoDestacadoMobileComponent {
  db: DB;
  proyectosDestacados: Proyecto[] = [];
  constructor(
    private dbService: DbService,
    private proyectoService: EnviarProyectoService,
    private router: Router,
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

  irAlProyectoDetacado(proyectoDestacado: Proyecto) {
    this.proyectoService.setProyectoDestacado(proyectoDestacado);
    this.router.navigate(['proyectos_destacado_descripcion']);
  }
}
