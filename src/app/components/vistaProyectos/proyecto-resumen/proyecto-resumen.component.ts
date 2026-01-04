import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Proyecto } from '../../../models/Proyectos.models';
import { EnviarProyectoService } from '../../../services/enviarObjProyecto/enviar-proyecto.service';
import { CommonModule } from '@angular/common';
import { DB } from '../../../models/dbDatos.models';
import { Tecnologia } from '../../../models/Tecnologia.models';

@Component({
  selector: 'app-proyecto-resumen',
  imports: [CommonModule, RouterLink],
  templateUrl: './proyecto-resumen.component.html',
  styleUrl: './proyecto-resumen.component.css',
})
export class ProyectoResumenComponent implements OnInit {
  proyecto: Proyecto;
  db: DB;
  tecnologias: Tecnologia[];

  constructor(private proyectoService: EnviarProyectoService) {}
  ngOnInit(): void {
    this.proyecto = this.proyectoService.getProyecto();
    this.tecnologias = this.proyecto.tecnologias;
  }
}
