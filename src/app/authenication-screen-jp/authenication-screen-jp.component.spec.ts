import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenicationScreenJPComponent } from './authenication-screen-jp.component';

describe('AuthenicationScreenJPComponent', () => {
  let component: AuthenicationScreenJPComponent;
  let fixture: ComponentFixture<AuthenicationScreenJPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenicationScreenJPComponent]
    });
    fixture = TestBed.createComponent(AuthenicationScreenJPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
