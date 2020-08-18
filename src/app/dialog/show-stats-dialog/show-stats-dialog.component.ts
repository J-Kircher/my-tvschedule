import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-stats-dialog',
  templateUrl: './show-stats-dialog.component.html',
  styleUrls: ['./show-stats-dialog.component.scss']
})
export class ShowStatsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShowStatsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
