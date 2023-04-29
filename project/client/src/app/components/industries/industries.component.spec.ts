import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesComponent } from './industries.component';

describe('IndustriesComponent', () => {
  let component: IndustriesComponent;
  let fixture: ComponentFixture<IndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
