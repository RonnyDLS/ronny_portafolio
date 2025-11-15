import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProyectosComponent } from './img-proyectos.component';

describe('ImgProyectosComponent', () => {
  let component: ImgProyectosComponent;
  let fixture: ComponentFixture<ImgProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
