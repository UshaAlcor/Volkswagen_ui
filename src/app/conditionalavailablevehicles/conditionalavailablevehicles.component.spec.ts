import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalavailablevehiclesComponent } from './conditionalavailablevehicles.component';

describe('ConditionalavailablevehiclesComponent', () => {
  let component: ConditionalavailablevehiclesComponent;
  let fixture: ComponentFixture<ConditionalavailablevehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalavailablevehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalavailablevehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
