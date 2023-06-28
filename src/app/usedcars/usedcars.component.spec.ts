import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarsComponent } from './usedcars.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('UsedcarsComponent', () => {
  let component: UsedcarsComponent;
  let fixture: ComponentFixture<UsedcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatDialogModule,RouterTestingModule,MatCardModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,MatTableModule], 
      declarations: [ UsedcarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
