import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatboxRoutingModule } from './chatbox-routing.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatBoxLayoutComponent } from './chat-box-layout/chat-box-layout.component';
import { MaterialsModule } from '../materials';
import { MatListModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ChatMessagesLayoutComponent } from './chat-box-layout/chat-messages-layout/chat-messages-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberListComponent } from './member-list/member-list/member-list.component';

@NgModule({
  declarations: [ChatListComponent, ChatBoxLayoutComponent, ChatMessagesLayoutComponent, MemberListComponent],
  imports: [
    CommonModule,
    ChatboxRoutingModule,
    MaterialsModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ChatBoxLayoutComponent,
  ]
})
export class ChatboxModule { }
