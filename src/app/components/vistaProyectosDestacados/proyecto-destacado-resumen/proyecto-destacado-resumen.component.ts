import { Component } from '@angular/core';
import { Proyecto } from '../../../models/Proyectos.models';
import { DB } from '../../../models/dbDatos.models';
import { Tecnologia } from '../../../models/Tecnologia.models';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { DbService } from '../../../services/db/db.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-proyecto-destacado-resumen',
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './proyecto-destacado-resumen.component.html',
    styleUrl: './proyecto-destacado-resumen.component.css'
})
export class ProyectoDestacadoResumenComponent {

  proyectoDestacado:Proyecto;
  db:DB;
  tecnologias:Tecnologia[];

  constructor(private proyectoService:EnviarProyectoService, dbService:DbService){

    this.proyectoDestacado = proyectoService.getProyectoDestacado();
    this.tecnologias = this.proyectoDestacado.tecnologias;
  }
}
