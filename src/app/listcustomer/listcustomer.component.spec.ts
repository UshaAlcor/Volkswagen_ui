import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcustomerComponent } from './listcustomer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCard, MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ListcustomerComponent', () => {
  let component: ListcustomerComponent;
  let fixture: ComponentFixture<ListcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatCardModule], 
      declarations: [ ListcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
