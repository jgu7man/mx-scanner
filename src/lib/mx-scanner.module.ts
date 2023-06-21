import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxScannerComponent } from './mx-scanner.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MxScannerDialog } from './mx-scanner/mx-scanner.dialog';
import { NgQrScannerModule } from 'angular2-qrscanner';

@NgModule({
  declarations: [MxScannerComponent, MxScannerDialog],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    NgQrScannerModule,
  ],
  exports: [MxScannerComponent, MxScannerDialog],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MxScannerModule {}
