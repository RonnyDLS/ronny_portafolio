import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EnviarProyectoService } from '../services/enviarObjProyecto/enviar-proyecto.service';
import { ProyectoIndex } from '../models/DTOProyectoIndex.models';
import { DbService } from '../services/db/db.service';
import { DB } from '../models/dbDatos.models';
import { Proyecto } from '../models/Proyectos.models';

@Component({
  selector: 'app-proyecto-descripcion',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './proyecto-descripcion.component.html',
  styleUrl: './proyecto-descripcion.component.css'
})
export class ProyectoDescripcionComponent {


  proyecto: Proyecto;
  db: DB;
  idProyecto: string;

  constructor(private proyectoService: EnviarProyectoService, private dbService: DbService) {

    this.proyecto = proyectoService.getProyecto();

    if (typeof window !== 'undefined') {

      if (this.proyecto) {
        localStorage.setItem("id_p_des", JSON.stringify(this.proyecto.id))
      }
      this.idProyecto = JSON.parse(localStorage.getItem("id_p_des"));

      dbService.getDB().subscribe(
        (respuesta) => {
          this.db = respuesta;

          for (let i = 0; i < this.db.proyectos.length; i++) {

            if (this.db.proyectos[i].id === this.idProyecto) {
              this.proyecto = this.db.proyectos[i];
              console.log(this.db)
            }
          }
        }
      )
    }
  }
}
