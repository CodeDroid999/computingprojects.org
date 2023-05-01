import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItConsultingComponent } from './it-consulting.component';

describe('ItConsultingComponent', () => {
  let component: ItConsultingComponent;
  let fixture: ComponentFixture<ItConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItConsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
