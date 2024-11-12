import { Component, EventEmitter, Output } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { DbService } from '../services/db/db.service';
import { DB } from '../models/dbDatos.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-descarga-curriculum-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './descarga-curriculum-modal.component.html',
  styleUrl: './descarga-curriculum-modal.component.css'
})
export class DescargaCurriculumModalComponent {

  db:DB;
  @Output() eventoCerrar = new EventEmitter<void>();

  constructor(dbService:DbService){
    dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
      }
    )
  }

  cerrarVentana(){
    this.eventoCerrar.emit();
  }
}
