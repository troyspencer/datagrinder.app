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

  isWindows(): Boolean {
    let OSName = 'Unknown';
    if (window.navigator.userAgent.indexOf('Windows NT 10.') !== -1) {OSName = 'Windows 10'; }
    if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {OSName = 'Windows 8'; }
    if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {OSName = 'Windows 7'; }
    if (OSName === 'Unknown') {return false; } else {return true; }
  }

}
