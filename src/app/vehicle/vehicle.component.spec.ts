import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatTableModule,BrowserAnimationsModule,MatDialogModule,RouterTestingModule,
        MatCardModule,FormsModule ,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCheckboxModule], 
      declarations: [ VehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
