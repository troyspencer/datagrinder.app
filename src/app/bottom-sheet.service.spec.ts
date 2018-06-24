import { TestBed, inject } from '@angular/core/testing';

import { BottomSheetService } from './bottom-sheet.service';

describe('BottomSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BottomSheetService]
    });
  });

  it('should be created', inject([BottomSheetService], (service: BottomSheetService) => {
    expect(service).toBeTruthy();
  }));
});
