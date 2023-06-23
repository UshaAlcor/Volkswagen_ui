import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleselectionComponent } from './vehicleselection.component';

describe('VehicleselectionComponent', () => {
  let component: VehicleselectionComponent;
  let fixture: ComponentFixture<VehicleselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
