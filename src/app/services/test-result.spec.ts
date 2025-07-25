import { TestBed } from '@angular/core/testing';

import { TestResult } from './test-result';

describe('TestResult', () => {
  let service: TestResult;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestResult);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
