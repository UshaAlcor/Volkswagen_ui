import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeJPComponent } from './password-change-jp.component';

describe('PasswordChangeJPComponent', () => {
  let component: PasswordChangeJPComponent;
  let fixture: ComponentFixture<PasswordChangeJPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordChangeJPComponent]
    });
    fixture = TestBed.createComponent(PasswordChangeJPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
