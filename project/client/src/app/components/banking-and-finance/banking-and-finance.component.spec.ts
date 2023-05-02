import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAndFinanceComponent } from './banking-and-finance.component';

describe('BankingAndFinanceComponent', () => {
  let component: BankingAndFinanceComponent;
  let fixture: ComponentFixture<BankingAndFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingAndFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingAndFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
