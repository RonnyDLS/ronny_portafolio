import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db/db.service';
import { DB } from '../../models/dbDatos.models';


@Component({
    selector: 'app-sobre-mi',
    imports: [
        CommonModule
    ],
    templateUrl: './sobre-mi.component.html',
    styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent implements OnInit {

  db:DB;

  constructor(private dbServicio:DbService){}

  ngOnInit(): void {
    this.dbServicio.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
      }
    )
  }

}
