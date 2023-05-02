import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveComponent } from './automotive.component';

describe('AutomotiveComponent', () => {
  let component: AutomotiveComponent;
  let fixture: ComponentFixture<AutomotiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
