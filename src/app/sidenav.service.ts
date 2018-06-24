import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public nav: MatSidenav;
  public activity: MatSidenav;
  public mobileQuery: MediaQueryList;

  private mobileQueryChangedSource = new Subject<boolean>();

  mobileQueryChanged$ = this.mobileQueryChangedSource.asObservable();

  mobileChanged(mobileMatches: boolean) {
    this.mobileQueryChangedSource.next(mobileMatches);
  }

}
