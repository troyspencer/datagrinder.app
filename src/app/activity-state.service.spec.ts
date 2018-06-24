import { TestBed, inject } from '@angular/core/testing';

import { ActivityStateService } from './activity-state.service';

describe('ActivityStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityStateService]
    });
  });

  it('should be created', inject([ActivityStateService], (service: ActivityStateService) => {
    expect(service).toBeTruthy();
  }));
});
