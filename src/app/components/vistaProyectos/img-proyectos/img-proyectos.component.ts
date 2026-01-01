import { Component } from '@angular/core';

import { DB } from '../../../models/dbDatos.models';
import { DbService } from '../../../services/db/db.service';

@Component({
    selector: 'app-img-proyectos',
    imports: [],
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
