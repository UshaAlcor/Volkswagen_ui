import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPdfEngComponent } from './print-pdf-eng.component';

describe('PrintPdfEngComponent', () => {
  let component: PrintPdfEngComponent;
  let fixture: ComponentFixture<PrintPdfEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPdfEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintPdfEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
