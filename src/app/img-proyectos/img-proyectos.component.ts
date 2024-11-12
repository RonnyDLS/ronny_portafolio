import { Component } from '@angular/core';
import { DbService } from '../services/db/db.service';
import { DB } from '../models/dbDatos.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-proyectos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './img-proyectos.component.html',
  styleUrl: './img-proyectos.component.css'
})
export class ImgProyectosComponent {

  db:DB;
  constructor(dbService:DbService){
    dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
      }
    )
  }

}
