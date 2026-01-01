import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Proyecto } from '../../../models/Proyectos.models';
import { ImgProyectosDestacadosComponent } from '../img-proyectos-destacados/img-proyectos-destacados.component';

@Component({
    selector: 'app-proyecto-destacado-mobile',
    imports: [
        CommonModule,
        ImgProyectosDestacadosComponent
    ],
    templateUrl: './proyecto-destacado-mobile.component.html',
    styleUrl: './proyecto-destacado-mobile.component.css'
})
export class ProyectoDestacadoMobileComponent {

  db:DB;
  proyectosDestacados:Proyecto[] = [];
  constructor(private dbService:DbService, private proyectoService:EnviarProyectoService, private router:Router){}

  ngOnInit(): void {
    this.dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;

        for(let proyecto of this.db.proyectos){
          if(proyecto.destacado === true){
            this.proyectosDestacados.push(proyecto);
          }
        }
      }
    );
  }

  irAlProyectoDetacado(proyectoDestacado:Proyecto){
    this.proyectoService.setProyectoDestacado(proyectoDestacado);
    this.router.navigate(["proyectos_destacado_descripcion"]);
  }
}
