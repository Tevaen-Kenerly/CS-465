import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripAdd } from './trip-add';

describe('TripAdd', () => {
  let component: TripAdd;
  let fixture: ComponentFixture<TripAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(TripAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
