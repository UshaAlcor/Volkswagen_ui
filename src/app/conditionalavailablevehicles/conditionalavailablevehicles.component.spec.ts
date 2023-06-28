import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalavailablevehiclesComponent } from './conditionalavailablevehicles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
describe('ConditionalavailablevehiclesComponent', () => {
  let component: ConditionalavailablevehiclesComponent;
  let fixture: ComponentFixture<ConditionalavailablevehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatDialogModule,RouterTestingModule,FormsModule,ReactiveFormsModule,
      MatSelectModule, MatCheckboxModule, MatTableModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule], 
      declarations: [ ConditionalavailablevehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalavailablevehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
