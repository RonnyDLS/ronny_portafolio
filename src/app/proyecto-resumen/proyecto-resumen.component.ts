import { Component } from '@angular/core';
import { ProyectosComponent } from "../proyectos/proyectos.component";
import { RouterLink } from '@angular/router';
import { Proyecto } from '../models/Proyectos.models';
import { EnviarProyectoService } from '../services/enviarObjProyecto/enviar-proyecto.service';
import { CommonModule } from '@angular/common';
import { DbService } from '../services/db/db.service';
import { DB } from '../models/dbDatos.models';
import { Tecnologia } from '../models/Tecnologia.models';

@Component({
  selector: 'app-proyecto-resumen',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './proyecto-resumen.component.html',
  styleUrl: './proyecto-resumen.component.css'
})
export class ProyectoResumenComponent {
  
  proyecto:Proyecto;
  db:DB;
  tecnologias:Tecnologia[];

  constructor(private proyectoService:EnviarProyectoService, dbService:DbService){

    this.proyecto = proyectoService.getProyecto();
    this.tecnologias = this.proyecto.tecnologias;
  }
}
