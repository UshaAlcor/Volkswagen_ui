import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePDFTwoComponent } from './generate-pdftwo.component';

describe('GeneratePDFTwoComponent', () => {
  let component: GeneratePDFTwoComponent;
  let fixture: ComponentFixture<GeneratePDFTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
