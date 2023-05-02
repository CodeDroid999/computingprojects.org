import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificialIntelligenceComponent } from './artificial-intelligence.component';

describe('ArtificialIntelligenceComponent', () => {
  let component: ArtificialIntelligenceComponent;
  let fixture: ComponentFixture<ArtificialIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtificialIntelligenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtificialIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
