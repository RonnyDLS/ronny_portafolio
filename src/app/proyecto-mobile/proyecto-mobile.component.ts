import { Component } from '@angular/core';
import { DB } from '../models/dbDatos.models';
import { DbService } from '../services/db/db.service';
import { EnviarProyectoService } from '../services/enviarObjProyecto/enviar-proyecto.service';
import { CommonModule } from '@angular/common';
import { Proyecto } from '../models/Proyecto.models';
import { ImgProyectosComponent } from "../img-proyectos/img-proyectos.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto-mobile',
  standalone: true,
  imports: [
    CommonModule,
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
