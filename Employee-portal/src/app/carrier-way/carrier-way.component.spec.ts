import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierWayComponent } from './carrier-way.component';

describe('CarrierWayComponent', () => {
  let component: CarrierWayComponent;
  let fixture: ComponentFixture<CarrierWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
