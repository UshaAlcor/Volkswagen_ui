import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleselectionComponent } from './vehicleselection.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VehicleselectionComponent', () => {
  let component: VehicleselectionComponent;
  let fixture: ComponentFixture<VehicleselectionComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,BrowserAnimationsModule,MatCheckboxModule,MatDialogModule,RouterTestingModule,MatCardModule,MatInputModule,
        MatFormFieldModule,MatTabsModule,MatTableModule,FormsModule,ReactiveFormsModule,MatTableModule], 

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
