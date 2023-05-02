import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndElearningComponent } from './education-and-elearning.component';

describe('EducationAndElearningComponent', () => {
  let component: EducationAndElearningComponent;
  let fixture: ComponentFixture<EducationAndElearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAndElearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAndElearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
