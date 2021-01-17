import { TestBed } from '@angular/core/testing';

import { InternationalToursService } from './international-tours.service';

describe('InternationalToursService', () => {
  let service: InternationalToursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternationalToursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
