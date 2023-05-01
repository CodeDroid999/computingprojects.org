import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsSectionComponent } from './brands-section.component';

describe('BrandsSectionComponent', () => {
  let component: BrandsSectionComponent;
  let fixture: ComponentFixture<BrandsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
