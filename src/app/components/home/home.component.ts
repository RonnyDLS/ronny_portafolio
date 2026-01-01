import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db/db.service';
import { DB } from '../../models/dbDatos.models';


@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private dbService:DbService){}

  db:DB;

  ngOnInit(): void {
    this.dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
        
      }
    )
  }
}
