import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowStatsDialogComponent } from '../dialog/show-stats-dialog/show-stats-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleEndedShows = new EventEmitter<boolean>();
  showEnded = false;

  dialogReturn: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  toggleEnded() {
    this.showEnded = !this.showEnded;
    this.toggleEndedShows.emit(this.showEnded);
  }

  openStatsDialog(): void {
    const dialogRef = this.dialog.open(ShowStatsDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.dialogReturn = result;
    });
  }

  openStats() {
    // this.childModal.show();
    this.openStatsDialog();
  }
}
