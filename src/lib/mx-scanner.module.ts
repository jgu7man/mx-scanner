import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MxScannerComponent } from './mx-scanner.component';

import { MxMaterialModule } from '@marxa/design-system';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { MxScannerDialog } from './components/mx-scanner/mx-scanner.dialog';

@NgModule({
  declarations: [MxScannerComponent, MxScannerDialog],
  imports: [
    CommonModule,
    MxMaterialModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    NgQrScannerModule
  ],
  exports: [MxScannerComponent, MxScannerDialog],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MxScannerModule {}
