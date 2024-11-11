import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ConexionRutasComponent } from "../conexion-rutas/conexion-rutas.component";

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
export class BienvenidaComponent {

  mostrarBienvenida:boolean= true;
  mostrarNav:boolean = false;

  evantoEnded(){
    this.mostrarBienvenida = false;
    this.mostrarNav = true;
  }

}
