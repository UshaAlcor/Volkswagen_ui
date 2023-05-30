import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePdfEngComponent } from './generate-pdf-eng.component';

describe('GeneratePdfEngComponent', () => {
  let component: GeneratePdfEngComponent;
  let fixture: ComponentFixture<GeneratePdfEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratePdfEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePdfEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
