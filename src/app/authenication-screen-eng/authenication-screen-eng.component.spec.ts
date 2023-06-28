import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenicationScreenEngComponent } from './authenication-screen-eng.component';

describe('AuthenicationScreenEngComponent', () => {
  let component: AuthenicationScreenEngComponent;
  let fixture: ComponentFixture<AuthenicationScreenEngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenicationScreenEngComponent]
    });
    fixture = TestBed.createComponent(AuthenicationScreenEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
