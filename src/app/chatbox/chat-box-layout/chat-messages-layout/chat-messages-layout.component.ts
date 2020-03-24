import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatroomService } from 'src/app/core/service/chatroom-service';
import { Chatroom, User } from 'src/app/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from 'src/app/core/entity/message-model';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/service/auth-service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-messages-layout',
  templateUrl: './chat-messages-layout.component.html',
  styleUrls: ['./chat-messages-layout.component.scss']
})
export class ChatMessagesLayoutComponent implements OnInit, OnDestroy, AfterViewChecked {

  private readonly onDestroy = new Subject<void>();
  chatroom: Chatroom = null;
  messageForm;
  user: User;
  roomid: string;
  @ViewChild('scrollable', { read: ElementRef }) scrollable: ElementRef<any>;


  constructor(private chatroomService: ChatroomService,
              private formBuilder: FormBuilder,
              private authService: AuthenticationService, private route: ActivatedRoute) {
    this.messageForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.roomid = this.route.firstChild != null ? this.route.firstChild.snapshot.params.id : null;
    if (!this.chatroom) {
      const activeChatroom = new Chatroom('null', 'null');
      activeChatroom._id = this.roomid;
      this.chatroomService.selectChatroom(this.authService.currentUserValue, activeChatroom);
    }
    this.chatroomService.chatRoom.pipe(takeUntil(this.onDestroy)).subscribe((selectedChatroom: Chatroom) => {
      if (selectedChatroom) {
        this.chatroom = selectedChatroom;
      }

      if (this.scrollable) {
        this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
      }
    });
    this.chatroomService.chatroomSocket.pipe(takeUntil(this.onDestroy)).subscribe((chatroom: Chatroom) => {
      if (this.chatroom !== null && this.chatroom._id === chatroom._id) {
        this.chatroom = chatroom;
      }
    });
    this.authService.currentUser.pipe(takeUntil(this.onDestroy)).subscribe(user => this.user = user);
  }

  sendMessage(text) {
    if (this.messageForm.invalid) {
      return;
  }
    this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    this.chatroomService.newMessage(new Message(this.user, text.text, new Date()), this.chatroom._id);
    this.messageForm.reset();
  }

  ngAfterViewChecked(): void {
    if (this.scrollable) {
      this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    }
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

}
