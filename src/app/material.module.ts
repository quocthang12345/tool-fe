import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }
