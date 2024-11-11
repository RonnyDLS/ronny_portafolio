import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDestacadoDescripcionComponent } from './proyecto-destacado-descripcion.component';

describe('ProyectoDestacadoDescripcionComponent', () => {
  let component: ProyectoDestacadoDescripcionComponent;
  let fixture: ComponentFixture<ProyectoDestacadoDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDestacadoDescripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDestacadoDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
