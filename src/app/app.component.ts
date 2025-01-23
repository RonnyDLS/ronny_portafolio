import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
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
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortafolio';

  @ViewChild('cambios', {read: ViewContainerRef}) cambios!:ViewContainerRef
  navContent:ComponentRef<NavbarComponent>;
  bienvenidaContent:ComponentRef<BienvenidaComponent>;
  
  ngAfterViewInit(): void {

    //this.bienvenidaContent = this.cambios.createComponent(BienvenidaComponent);
    // setTimeout(()=>{
    //   this.bienvenidaContent.destroy()
    //   this.navContent = this.cambios.createComponent(NavbarComponent);
    // }, 4000)
    this.navContent = this.cambios.createComponent(NavbarComponent);
  }
}
