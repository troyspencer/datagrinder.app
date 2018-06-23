import { TestBed, inject } from '@angular/core/testing';

import { RightSidenavService } from './right-sidenav.service';

describe('RightSidenavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightSidenavService]
    });
  });

  it('should be created', inject([RightSidenavService], (service: RightSidenavService) => {
    expect(service).toBeTruthy();
  }));
});
