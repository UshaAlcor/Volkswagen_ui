import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCustInfoComponent } from './detailed-cust-info.component';

describe('DetailedCustInfoComponent', () => {
  let component: DetailedCustInfoComponent;
  let fixture: ComponentFixture<DetailedCustInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCustInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedCustInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
