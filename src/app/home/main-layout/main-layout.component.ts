import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatDialog, MatDialogConfig } from '@angular/material';
import { SidenavService } from 'src/app/core/service/sidenav-service';
import { ChatroomService } from 'src/app/core/service/chatroom-service';
import { ChatroomDialogComponent } from 'src/app/shared';
import { Chatroom } from 'src/app/core';
import {AuthenticationService} from '../../core/service/auth-service';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService, private dialog: MatDialog,
              private chatroomService: ChatroomService,
              private authService: AuthenticationService) { }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  createRoomDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ChatroomDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      (data: Chatroom) => this.chatroomService.createChatroom(data)
      );
}

  logout() {
    this.authService.logout();
  }

}
