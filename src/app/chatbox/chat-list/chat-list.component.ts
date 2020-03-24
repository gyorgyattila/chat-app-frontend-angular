import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Chatroom } from 'src/app/core';
import { ChatroomService } from 'src/app/core/service/chatroom-service';
import { AuthenticationService } from 'src/app/core/service/auth-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {


  @Input() chatRooms: Chatroom[] = [];
  private readonly onDestroy = new Subject<void>();


  constructor(private chatroomService: ChatroomService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.chatroomService.fetchAllChatroom();
    this.chatroomService.members.pipe(takeUntil(this.onDestroy)).subscribe(res => this.chatroomService.fetchAllChatroom());
  }

  openRoom(chatRoom: Chatroom) {
    this.chatroomService.selectChatroom(this.authService.currentUserValue, chatRoom);

  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

}
