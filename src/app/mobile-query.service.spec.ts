import { TestBed, inject } from '@angular/core/testing';

import { MobileQueryService } from './mobile-query.service';

describe('MobileQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileQueryService]
    });
  });

  it('should be created', inject([MobileQueryService], (service: MobileQueryService) => {
    expect(service).toBeTruthy();
  }));
});
