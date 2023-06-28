import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclenegotiationComponent } from './vehiclenegotiation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
describe('VehiclenegotiationComponent', () => {
  let component: VehiclenegotiationComponent;
  let fixture: ComponentFixture<VehiclenegotiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatTableModule,
        MatDialogModule,RouterTestingModule,MatCardModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule], 
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
