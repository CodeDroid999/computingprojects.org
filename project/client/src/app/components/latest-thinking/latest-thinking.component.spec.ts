import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestThinkingComponent } from './latest-thinking.component';

describe('LatestThinkingComponent', () => {
  let component: LatestThinkingComponent;
  let fixture: ComponentFixture<LatestThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
