import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBoxLayoutComponent } from './chat-box-layout/chat-box-layout.component';
import { ChatMessagesLayoutComponent } from './chat-box-layout/chat-messages-layout/chat-messages-layout.component';

const routes: Routes = [
  { path: 'room', component: ChatBoxLayoutComponent, children: [
    {
      path: ':id',
      component: ChatMessagesLayoutComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatboxRoutingModule { }
