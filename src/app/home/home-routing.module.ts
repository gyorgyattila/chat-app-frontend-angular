import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBoxLayoutComponent } from '../chatbox';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
