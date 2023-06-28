import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordJapaneseComponent } from './reset-password-japanese.component';

describe('ResetPasswordJapaneseComponent', () => {
  let component: ResetPasswordJapaneseComponent;
  let fixture: ComponentFixture<ResetPasswordJapaneseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordJapaneseComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordJapaneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
