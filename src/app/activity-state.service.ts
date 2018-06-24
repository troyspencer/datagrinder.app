import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityStateService {

  public activityOpen: boolean;

  private activityOpenedSource = new Subject<boolean>();

  activityOpened$ = this.activityOpenedSource.asObservable();

  activityOpened(activityOpen: boolean) {
    this.activityOpen = activityOpen;
    this.activityOpenedSource.next(activityOpen);
  }
}
