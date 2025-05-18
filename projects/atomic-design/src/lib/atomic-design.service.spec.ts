import { TestBed } from '@angular/core/testing';

import { AtomicDesignService } from './atomic-design.service';

describe('AtomicDesignService', () => {
  let service: AtomicDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtomicDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
