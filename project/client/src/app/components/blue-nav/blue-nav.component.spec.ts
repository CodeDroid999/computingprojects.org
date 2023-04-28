import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueNavComponent } from './blue-nav.component';

describe('BlueNavComponent', () => {
  let component: BlueNavComponent;
  let fixture: ComponentFixture<BlueNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
