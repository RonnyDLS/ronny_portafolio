import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbService } from '../../../services/db/db.service';
import { DB } from '../../../models/dbDatos.models';

@Component({
  selector: 'app-img-proyectos-destacados',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './img-proyectos-destacados.component.html',
  styleUrl: './img-proyectos-destacados.component.css'
})
export class ImgProyectosDestacadosComponent {
  
  db:DB;
  constructor(dbService:DbService){
    dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
      }
    )
  }
}
