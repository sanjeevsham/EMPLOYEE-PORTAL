import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotgotPassComponent } from './fotgot-pass.component';

describe('FotgotPassComponent', () => {
  let component: FotgotPassComponent;
  let fixture: ComponentFixture<FotgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotgotPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
