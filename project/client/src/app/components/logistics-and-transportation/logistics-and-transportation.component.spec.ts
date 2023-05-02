import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsAndTransportationComponent } from './logistics-and-transportation.component';

describe('LogisticsAndTransportationComponent', () => {
  let component: LogisticsAndTransportationComponent;
  let fixture: ComponentFixture<LogisticsAndTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsAndTransportationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsAndTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
