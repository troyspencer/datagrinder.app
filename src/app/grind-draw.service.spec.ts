import { TestBed, inject } from '@angular/core/testing';

import { GrindDrawService } from './grind-draw.service';

describe('GrindDrawService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrindDrawService]
    });
  });

  it('should be created', inject([GrindDrawService], (service: GrindDrawService) => {
    expect(service).toBeTruthy();
  }));
});
