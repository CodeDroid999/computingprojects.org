import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentProcSecComponent } from './development-proc-sec.component';

describe('DevelopmentProcSecComponent', () => {
  let component: DevelopmentProcSecComponent;
  let fixture: ComponentFixture<DevelopmentProcSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentProcSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentProcSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
