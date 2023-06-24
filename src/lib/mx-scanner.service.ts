import { Injectable } from '@angular/core';
import { MxAlert } from '@marxa-digital/devkit';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MxScanner {
  codeScanned$: Subject<any> = new Subject();
  startScan$: Subject<null> = new Subject();
  constructor(private _alert: MxAlert) {}

  scannedSuccess(result: any) {
    if (typeof result === 'string') {
    } else {
      this.codeScanned$.next(result);
    }
  }
}
