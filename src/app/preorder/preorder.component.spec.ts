import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreorderComponent } from './preorder.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

describe('PreorderComponent', () => {
  let component: PreorderComponent;
  let fixture: ComponentFixture<PreorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,BrowserAnimationsModule,MatDialogModule,RouterTestingModule,
        MatFormFieldModule,MatInputModule,MatCardModule,MatTableModule], 
      declarations: [ PreorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
