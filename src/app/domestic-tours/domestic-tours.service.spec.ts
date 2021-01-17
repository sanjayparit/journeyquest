import { TestBed } from '@angular/core/testing';

import { DomesticToursService } from './domestic-tours.service';

describe('DomesticToursService', () => {
  let service: DomesticToursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomesticToursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
