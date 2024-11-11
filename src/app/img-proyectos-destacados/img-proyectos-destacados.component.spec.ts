import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProyectosDestacadosComponent } from './img-proyectos-destacados.component';

describe('ImgProyectosDestacadosComponent', () => {
  let component: ImgProyectosDestacadosComponent;
  let fixture: ComponentFixture<ImgProyectosDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgProyectosDestacadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgProyectosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
