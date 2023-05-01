import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesSecComponent } from './badges-sec.component';

describe('BadgesSecComponent', () => {
  let component: BadgesSecComponent;
  let fixture: ComponentFixture<BadgesSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
