import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplasherComponent } from './splasher.component';

describe('SplasherComponent', () => {
  let component: SplasherComponent;
  let fixture: ComponentFixture<SplasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplasherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
