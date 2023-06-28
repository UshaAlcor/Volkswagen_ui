import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatDialogModule,MatTableModule], 
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },  { provide: MAT_DIALOG_DATA, useValue: {  } }],
      declarations: [ ConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
