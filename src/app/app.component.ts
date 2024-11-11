import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from "./bienvenida/bienvenida.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { ProyectosDestacadosComponent } from "./proyectos-destacados/proyectos-destacados.component";
import { ProyectoDescripcionComponent } from "./proyecto-descripcion/proyecto-descripcion.component";
import { ProyectoResumenComponent } from "./proyecto-resumen/proyecto-resumen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BienvenidaComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortafolio';

}
