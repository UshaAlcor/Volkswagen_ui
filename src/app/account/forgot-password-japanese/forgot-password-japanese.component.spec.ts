import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordJapaneseComponent } from './forgot-password-japanese.component';

describe('ForgotPasswordJapaneseComponent', () => {
  let component: ForgotPasswordJapaneseComponent;
  let fixture: ComponentFixture<ForgotPasswordJapaneseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordJapaneseComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordJapaneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
