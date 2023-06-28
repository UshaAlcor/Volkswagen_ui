import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInformationComponent } from './customer-information.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('CustomerInformationComponent', () => {
  let component: CustomerInformationComponent;
  let fixture: ComponentFixture<CustomerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatCardModule,FormsModule,ReactiveFormsModule], 
      declarations: [ CustomerInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
