import { Component, EventEmitter, Output } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-descarga-curriculum-modal',
  standalone: true,
  imports: [],
  templateUrl: './descarga-curriculum-modal.component.html',
  styleUrl: './descarga-curriculum-modal.component.css'
})
export class DescargaCurriculumModalComponent {

  @Output() eventoCerrar = new EventEmitter<void>();

  cerrarVentana(){
    this.eventoCerrar.emit();
  }
}
