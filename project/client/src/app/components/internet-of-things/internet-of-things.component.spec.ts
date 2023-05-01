import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetOfThingsComponent } from './internet-of-things.component';

describe('InternetOfThingsComponent', () => {
  let component: InternetOfThingsComponent;
  let fixture: ComponentFixture<InternetOfThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetOfThingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetOfThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
