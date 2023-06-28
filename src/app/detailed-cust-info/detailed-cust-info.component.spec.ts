import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCustInfoComponent } from './detailed-cust-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('DetailedCustInfoComponent', () => {
  let component: DetailedCustInfoComponent;
  let fixture: ComponentFixture<DetailedCustInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,RouterTestingModule,MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule], 
      declarations: [ DetailedCustInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedCustInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
