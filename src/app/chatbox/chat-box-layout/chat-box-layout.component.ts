import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chatroom } from 'src/app/core';
import { ChatroomService } from 'src/app/core/service/chatroom-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-chat-box-layout',
  templateUrl: './chat-box-layout.component.html',
  styleUrls: ['./chat-box-layout.component.scss']
})
export class ChatBoxLayoutComponent implements OnInit, OnDestroy {


  chatRooms: Chatroom[] = [];
  $chatrooms: Subscription;

  constructor(private chatroomService: ChatroomService) { }

  ngOnInit() {
    this.$chatrooms = this.chatroomService.chatRooms.subscribe((chatrooms: Chatroom[]) => {
      this.chatRooms = chatrooms;
    });
  }

  ngOnDestroy(): void {
    this.$chatrooms.unsubscribe();
  }

}
