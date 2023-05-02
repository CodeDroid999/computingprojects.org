import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAndTourismComponent } from './travel-and-tourism.component';

describe('TravelAndTourismComponent', () => {
  let component: TravelAndTourismComponent;
  let fixture: ComponentFixture<TravelAndTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelAndTourismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelAndTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
