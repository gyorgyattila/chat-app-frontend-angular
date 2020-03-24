import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared';
import { ChatboxModule } from '../chatbox/chatbox.module';
import { MatListModule, MatSidenavModule, MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ChatboxModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [MainLayoutComponent]
})
export class HomeModule { }
