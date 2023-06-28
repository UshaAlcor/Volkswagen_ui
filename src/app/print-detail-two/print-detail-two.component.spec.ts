import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDetailTwoComponent } from './print-detail-two.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
describe('PrintDetailTwoComponent', () => {
  let component: PrintDetailTwoComponent;
  let fixture: ComponentFixture<PrintDetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatDialogModule,MatCardModule,
        MatNativeDateModule , MatRadioModule, MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,MatDatepickerModule], 
      
      declarations: [ PrintDetailTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
