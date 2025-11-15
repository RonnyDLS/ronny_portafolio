import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoMobileComponent } from './proyecto-mobile.component';

describe('ProyectoMobileComponent', () => {
  let component: ProyectoMobileComponent;
  let fixture: ComponentFixture<ProyectoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
