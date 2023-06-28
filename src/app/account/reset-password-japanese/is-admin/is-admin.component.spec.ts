import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsAdminComponent } from './is-admin.component';

describe('IsAdminComponent', () => {
  let component: IsAdminComponent;
  let fixture: ComponentFixture<IsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsAdminComponent]
    });
    fixture = TestBed.createComponent(IsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
