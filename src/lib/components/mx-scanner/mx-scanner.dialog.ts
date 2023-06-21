import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { iScannerUI } from '../../mx-scanner.model';

@Component({
  templateUrl: './mx-scanner.dialog.html',
  styleUrls: ['./mx-scanner.dialog.scss']
})
export class MxScannerDialog {
  constructor(
    public dialog: MatDialogRef<MxScannerDialog>,
    @Inject(MAT_DIALOG_DATA) public scannerUI: iScannerUI
  ) {}
}
