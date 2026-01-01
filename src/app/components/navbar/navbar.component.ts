import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { DescargaCurriculumModalComponent } from "../../components/descarga-curriculum-modal/descarga-curriculum-modal.component";
import { CommonModule } from '@angular/common';
import { DbService } from '../../services/db/db.service';
import { DB } from '../../models/dbDatos.models';
import { TemaConfig } from '../../models/estilo.model';

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
export class NavbarComponent implements OnInit {

  color: string = '#07002c';
  db: DB;
  tema: TemaConfig;
  isActive: boolean = true;
  @ViewChild('descargaCurriculum', {read: ViewContainerRef}) descargaCurriculum!:ViewContainerRef;
  visibilidadVentana:boolean = false;

  constructor(private router: Router, private dbService:DbService) {}
  
  ngOnInit(): void {
    this.dbService.getDB().subscribe(
      (respuesta)=>{
        this.db = respuesta;
      }
    )
    this. irAHome();
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

  changesTema(){
    this.isActive = !this.isActive;
    if(!this.isActive) {
      this.tema = this.db.estilo.temas[1];
      console.log('__isActive', this.isActive)
    }

    if(this.isActive) {
      this.tema = this.db.estilo.temas[0];
      console.log('__isActive', this.isActive)
    }
  }
} 
