import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuranceComponent } from './quality-assurance.component';

describe('QualityAssuranceComponent', () => {
  let component: QualityAssuranceComponent;
  let fixture: ComponentFixture<QualityAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAssuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
