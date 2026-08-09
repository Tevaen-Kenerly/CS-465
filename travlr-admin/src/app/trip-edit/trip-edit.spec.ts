import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripEdit } from './trip-edit';

describe('TripEdit', () => {
  let component: TripEdit;
  let fixture: ComponentFixture<TripEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(TripEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
