import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDestacadoMobileComponent } from './proyecto-destacado-mobile.component';

describe('ProyectoDestacadoMobileComponent', () => {
  let component: ProyectoDestacadoMobileComponent;
  let fixture: ComponentFixture<ProyectoDestacadoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDestacadoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDestacadoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
