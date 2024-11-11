import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDescripcionComponent } from './proyecto-descripcion.component';

describe('ProyectoDescripcionComponent', () => {
  let component: ProyectoDescripcionComponent;
  let fixture: ComponentFixture<ProyectoDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDescripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
