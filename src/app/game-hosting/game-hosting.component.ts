import { Component } from '@angular/core';
import { MatDialog} from '@angular/material';
import { GameHostingDialogComponent } from '../game-hosting-dialog/game-hosting-dialog.component';

@Component({
  selector: 'app-game-hosting',
  templateUrl: './game-hosting.component.html',
  styleUrls: ['./game-hosting.component.css']
})
export class GameHostingComponent {

  constructor(public dialog: MatDialog) {}

  isWindows(): Boolean {
    let OSName = 'Unknown';
    if (window.navigator.userAgent.indexOf('Windows NT 10.') !== -1) {OSName = 'Windows 10'; }
    if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {OSName = 'Windows 8'; }
    if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {OSName = 'Windows 7'; }
    if (OSName === 'Unknown') {return false; } else {return true; }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GameHostingDialogComponent, {
      width: '40em'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
