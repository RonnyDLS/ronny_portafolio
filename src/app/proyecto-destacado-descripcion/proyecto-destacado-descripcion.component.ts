import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DB } from '../models/dbDatos.models';
import { EnviarProyectoService } from '../services/enviarObjProyecto/enviar-proyecto.service';
import { DbService } from '../services/db/db.service';
import { Proyecto } from '../models/Proyecto.models';

@Component({
  selector: 'app-proyecto-destacado-descripcion',
  standalone: true,
  imports: [
    CommonModule
],
  templateUrl: './proyecto-destacado-descripcion.component.html',
  styleUrl: './proyecto-destacado-descripcion.component.css'
})
export class ProyectoDestacadoDescripcionComponent {
  proyectoDestacado: Proyecto;
  db: DB;
  idProyectoDestacado: string;

  constructor(private proyectoService: EnviarProyectoService, private dbService: DbService) {

    this.proyectoDestacado = proyectoService.getProyectoDestacado();

    if (typeof window !== 'undefined') {

      if (this.proyectoDestacado) {
        localStorage.setItem("id_p_des_destacado", JSON.stringify(this.proyectoDestacado.id))
      }
      this.idProyectoDestacado = JSON.parse(localStorage.getItem("id_p_des_destacado"));

      dbService.getDB().subscribe(
        (respuesta) => {
          this.db = respuesta;

          for (let i = 0; i < this.db.proyectos.length; i++) {

            if (this.db.proyectos[i].id === this.idProyectoDestacado) {
              this.proyectoDestacado = this.db.proyectos[i];
            }
          }
        }
      )
    }
  }
}
