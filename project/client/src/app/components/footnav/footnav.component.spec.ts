import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootnavComponent } from './footnav.component';

describe('FootnavComponent', () => {
  let component: FootnavComponent;
  let fixture: ComponentFixture<FootnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
