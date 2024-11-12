import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { DescargaCurriculumModalComponent } from "../descarga-curriculum-modal/descarga-curriculum-modal.component";
import { CommonModule } from '@angular/common';
import { DbService } from '../services/db/db.service';
import { DB } from '../models/dbDatos.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    DescargaCurriculumModalComponent,
    CommonModule
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  db:DB;
  @ViewChild('descargaCurriculum', {read: ViewContainerRef}) descargaCurriculum!:ViewContainerRef;
  visibilidadVentana:boolean = false;

  constructor(private router: Router, private dbService:DbService) {
    dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
      }
    )
  }

  menu() {
    const ico_menu = document.getElementById('ico_menu')
    if (ico_menu) {
      ico_menu.classList.toggle('icono_menu')
    }
  }

  irAHome() {
    this.router.navigate(["/home"]);
  }

  abrirVentanaCV(){
    this.visibilidadVentana = true;
  }

  cerrarVentanaCV(){
    this.visibilidadVentana = false;
  }

} 
