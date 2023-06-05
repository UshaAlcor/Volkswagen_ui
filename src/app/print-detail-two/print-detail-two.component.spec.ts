import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDetailTwoComponent } from './print-detail-two.component';

describe('PrintDetailTwoComponent', () => {
  let component: PrintDetailTwoComponent;
  let fixture: ComponentFixture<PrintDetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDetailTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
