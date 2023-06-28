import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJapanTranslationComponent } from './login-japan-translation.component';

describe('LoginJapanTranslationComponent', () => {
  let component: LoginJapanTranslationComponent;
  let fixture: ComponentFixture<LoginJapanTranslationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginJapanTranslationComponent]
    });
    fixture = TestBed.createComponent(LoginJapanTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
