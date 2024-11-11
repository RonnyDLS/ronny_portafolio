import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDestacadosComponent } from './proyectos-destacados.component';

describe('ProyectosDestacadosComponent', () => {
  let component: ProyectosDestacadosComponent;
  let fixture: ComponentFixture<ProyectosDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosDestacadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
