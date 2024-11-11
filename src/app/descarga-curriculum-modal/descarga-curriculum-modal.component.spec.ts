import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaCurriculumModalComponent } from './descarga-curriculum-modal.component';

describe('DescargaCurriculumModalComponent', () => {
  let component: DescargaCurriculumModalComponent;
  let fixture: ComponentFixture<DescargaCurriculumModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescargaCurriculumModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargaCurriculumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
