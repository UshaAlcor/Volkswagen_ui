import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinfoComponent } from './updateinfo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('UpdateinfoComponent', () => {
  let component: UpdateinfoComponent;
  let fixture: ComponentFixture<UpdateinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatCardModule, FormsModule,
        ReactiveFormsModule], 
      declarations: [ UpdateinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
