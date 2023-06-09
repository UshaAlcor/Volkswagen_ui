import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclenegotiationComponent } from './vehiclenegotiation.component';

describe('VehiclenegotiationComponent', () => {
  let component: VehiclenegotiationComponent;
  let fixture: ComponentFixture<VehiclenegotiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclenegotiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclenegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
