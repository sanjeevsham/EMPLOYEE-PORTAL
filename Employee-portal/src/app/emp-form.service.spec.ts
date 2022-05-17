import { TestBed } from '@angular/core/testing';

import { EmpFormService } from './emp-form.service';

describe('EmpFormService', () => {
  let service: EmpFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
