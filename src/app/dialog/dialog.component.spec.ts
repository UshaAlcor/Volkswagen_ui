import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,RouterTestingModule,MatDialogModule], 
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }],
      declarations: [ DialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
