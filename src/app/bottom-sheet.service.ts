import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {

  public bottomSheetExists: boolean;
  public bottomSheet: MatBottomSheet;
  public bottomSheetRef: MatBottomSheetRef;

  private bottomSheetOpenedSource = new Subject<boolean>();

  bottomSheetOpened$ = this.bottomSheetOpenedSource.asObservable();

  bottomSheetOpened(bottomSheetExists: boolean) {
    this.bottomSheetExists = bottomSheetExists;
    this.bottomSheetOpenedSource.next(bottomSheetExists);
  }
}
