import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePDFTwoComponent } from './generate-pdftwo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('GeneratePDFTwoComponent', () => {
  let component: GeneratePDFTwoComponent;
  let fixture: ComponentFixture<GeneratePDFTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,MatDialogModule,MatCardModule,PdfViewerModule ], 
      declarations: [ GeneratePDFTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePDFTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
