import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAndEntertainmentComponent } from './media-and-entertainment.component';

describe('MediaAndEntertainmentComponent', () => {
  let component: MediaAndEntertainmentComponent;
  let fixture: ComponentFixture<MediaAndEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaAndEntertainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaAndEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
