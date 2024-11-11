import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionRutasComponent } from './conexion-rutas.component';

describe('ConexionRutasComponent', () => {
  let component: ConexionRutasComponent;
  let fixture: ComponentFixture<ConexionRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConexionRutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
