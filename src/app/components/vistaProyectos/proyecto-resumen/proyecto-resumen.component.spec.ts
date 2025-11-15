import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoResumenComponent } from './proyecto-resumen.component';

describe('ProyectoResumenComponent', () => {
  let component: ProyectoResumenComponent;
  let fixture: ComponentFixture<ProyectoResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoResumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
