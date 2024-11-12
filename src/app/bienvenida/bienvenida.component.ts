import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ConexionRutasComponent } from "../conexion-rutas/conexion-rutas.component";
import { error } from 'node:console';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [
    CommonModule,
    ConexionRutasComponent
  ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent implements OnInit {
  
  
  @ViewChild('video') videoref!: ElementRef<HTMLVideoElement>;

  mostrarBienvenida: boolean = true;
  mostrarNav: boolean = false;
  
  ngOnInit(): void {
    setTimeout(()=>{
      this.mostrarBienvenida = false;
      this.mostrarNav = true;
    }, 4000)
  }

}
