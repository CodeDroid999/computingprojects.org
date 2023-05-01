import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDevelopmentComponent } from './app-development.component';

describe('AppDevelopmentComponent', () => {
  let component: AppDevelopmentComponent;
  let fixture: ComponentFixture<AppDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
