import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailAndCommerceComponent } from './retail-and-commerce.component';

describe('RetailAndCommerceComponent', () => {
  let component: RetailAndCommerceComponent;
  let fixture: ComponentFixture<RetailAndCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailAndCommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailAndCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
