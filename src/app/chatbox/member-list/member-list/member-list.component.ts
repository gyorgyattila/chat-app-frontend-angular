import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatroomService } from 'src/app/core/service/chatroom-service';
import { Chatroom } from 'src/app/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit, OnDestroy {


  public chatroom: Chatroom = null;
  private readonly onDestroy = new Subject<void>();

  constructor(private chatroomService: ChatroomService) { }

  ngOnInit() {
       this.chatroomService.chatRoom.pipe(takeUntil(this.onDestroy)).subscribe((res: Chatroom) => {
        this.chatroom = res;
      });
       this.chatroomService.members.pipe(takeUntil(this.onDestroy)).subscribe((res: Chatroom) => {
         if (this.chatroom._id === res._id) {
          this.chatroom = res;
         }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }
}
