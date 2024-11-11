import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-conexion-rutas',
  standalone: true,
  imports: [NavbarComponent],
  template: `<app-navbar></app-navbar>`
})
export class ConexionRutasComponent {

  constructor(private router:Router){
   router.navigate(['/home']);
  }
}
