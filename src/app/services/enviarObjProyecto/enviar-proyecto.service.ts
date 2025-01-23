import { Injectable } from '@angular/core';
import { Proyecto } from '../../models/Proyectos.models';
import { DbService } from '../db/db.service';
import { DB } from '../../models/dbDatos.models';
import { Conocimiento } from '../../models/Conocimiento.models';

@Injectable({
  providedIn: 'root'
})
export class EnviarProyectoService {

  db:DB;
  proyecto:Proyecto;
  proyectoDestacado:Proyecto;
  index:number;

  constructor(private dbService:DbService) { 
    dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta
      }
    )
  }

  // Obtener los conocimientos
  getConocimientos():Conocimiento[]{
    return this.db.sobreMy.conocimientos;
  }

  // Obtender el proyecto
  setProyecto(proyecto:Proyecto){
    this.proyecto = proyecto;
  }  
  // Dar el proyecto
  getProyecto():Proyecto{
    return this.proyecto;
  }
  
  // Obtender el proyecto destacado
  setProyectoDestacado(proyectoDestacado:Proyecto){
    this.proyectoDestacado = proyectoDestacado;
  }

  // Dar el proyecto destacado
  getProyectoDestacado():Proyecto{
    return this.proyectoDestacado;
  }
}