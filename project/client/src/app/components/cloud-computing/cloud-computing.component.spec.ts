import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudComputingComponent } from './cloud-computing.component';

describe('CloudComputingComponent', () => {
  let component: CloudComputingComponent;
  let fixture: ComponentFixture<CloudComputingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudComputingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
