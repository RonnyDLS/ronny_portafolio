import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDestacadoResumenComponent } from './proyecto-destacado-resumen.component';

describe('ProyectoDestacadoResumenComponent', () => {
  let component: ProyectoDestacadoResumenComponent;
  let fixture: ComponentFixture<ProyectoDestacadoResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDestacadoResumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDestacadoResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
