import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {

  public bottomSheetExists: boolean;
  public bottomSheetRef: MatBottomSheetRef;

  private bottomSheetOpenedSource = new Subject<boolean>();

  bottomSheetOpened$ = this.bottomSheetOpenedSource.asObservable();

  constructor(
    public bottomSheet: MatBottomSheet
  ) {
  }

  bottomSheetOpened(bottomSheetExists: boolean) {
    this.bottomSheetExists = bottomSheetExists;
    this.bottomSheetOpenedSource.next(bottomSheetExists);
  }
}
