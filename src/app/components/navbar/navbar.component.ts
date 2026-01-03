import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { DescargaCurriculumModalComponent } from '../../components/descarga-curriculum-modal/descarga-curriculum-modal.component';

import { DbService } from '../../services/db/db.service';
import { DB } from '../../models/dbDatos.models';
import { FeatureSection } from '../../models/type/firebase.type';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    DescargaCurriculumModalComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  db: DB;
  @ViewChild('descargaCurriculum', { read: ViewContainerRef })
  descargaCurriculum!: ViewContainerRef;
  visibilidadVentana: boolean = false;

  constructor(
    private router: Router,
    private dbService: DbService,
    private readonly fb: FirebaseService
  ) {
    this.irAHome();
  }
  async ngOnInit(): Promise<void> {
    const firebaseService: FeatureSection = await this.fb.getFeatureSection();

    if (firebaseService?.enableDbFirebase) {
      this.db = await this.fb.getDB();
    } else {
      this.dbService.getDB().subscribe((respuesta) => {
        this.db = respuesta;
      });
    }
  }

  menu() {
    const ico_menu = document.getElementById('ico_menu');
    if (ico_menu) {
      ico_menu.classList.toggle('icono_menu');
    }
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

  abrirVentanaCV() {
    this.visibilidadVentana = true;
  }

  cerrarVentanaCV() {
    this.visibilidadVentana = false;
  }
}
