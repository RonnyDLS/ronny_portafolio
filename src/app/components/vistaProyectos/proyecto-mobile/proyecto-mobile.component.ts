import { Component } from '@angular/core';
import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';

import { Proyecto } from '../../../models/Proyectos.models';
import { Router } from '@angular/router';
import { ImgProyectosComponent } from '../img-proyectos/img-proyectos.component';

@Component({
    selector: 'app-proyecto-mobile',
    imports: [
    ImgProyectosComponent
],
    templateUrl: './proyecto-mobile.component.html',
    styleUrl: './proyecto-mobile.component.css'
})
export class ProyectoMobileComponent {

  db:DB;
  proyecto:Proyecto;
  constructor(private dbService:DbService, private proyectoService:EnviarProyectoService, private router:Router){}

  ngOnInit(): void {
    this.dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
      }
    );
  }

  irAlProyecto(proyecto:Proyecto){
    this.proyecto = proyecto;
    this.proyectoService.setProyecto(proyecto);
    this.router.navigate(["/proyectos_descripcion"]);
  }
}
