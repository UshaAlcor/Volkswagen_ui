import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogComponent } from './alert-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('AlertDialogComponent', () => {
  let component: AlertDialogComponent;
  let fixture: ComponentFixture<AlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,MatDialogModule], 
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: {  } }],
      declarations: [ AlertDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
