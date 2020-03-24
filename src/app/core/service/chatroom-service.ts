import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chatroom, User } from '../entity';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../entity/message-model';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

@Injectable()
export class ChatroomService {

    chatroomSocket = this.socket.fromEvent<Chatroom>('chatroom');
    members = this.socket.fromEvent<Chatroom>('members');

    BASEURL = environment.apiUrl;

    private _chatRooms: BehaviorSubject<Array<Chatroom>> = new BehaviorSubject<Array<Chatroom>>(null);
    public readonly chatRooms: Observable<Array<Chatroom>> = this._chatRooms.asObservable();

    private _chatRoom: BehaviorSubject<Chatroom> = new BehaviorSubject<Chatroom>(null);
    public readonly chatRoom: Observable<Chatroom> = this._chatRoom.asObservable();



    constructor(private httpClient: HttpClient, private socket: Socket) {

    }

    createChatroom(chatroom: Chatroom) {
      this.httpClient.post<Chatroom>(this.BASEURL + '/chatroom/create', {chatroom}).subscribe(
        res => {
          const currentValue = this._chatRooms.value;
          const updatedValue = [...currentValue, res];
          this._chatRooms.next(updatedValue);
        }
      );
    }

    fetchAllChatroom() {
      return this.httpClient.get<Chatroom[]>(this.BASEURL + '/chatroom/findAll').subscribe(res => this.setChatrooms(res));
    }

    async selectChatroom(user: User, chatRoom: Chatroom) {
      const previouseChatroom = this._chatRoom.value;
      if (this._chatRoom.value) {
        this.socket.emit('userLeft', {user, previouseChatroom});
      }
      this.fetchRoomById(chatRoom._id).subscribe((res: Chatroom) => {
        this._chatRoom.next(res);
        this.socket.emit('joinUser', {user, chatRoom});
      });
    }

    newMessage(message: Message, chatroomId: string) {
      this.socket.emit('sendMessage', {message, chatroomId});
    }

    setChatrooms(chatrooms: Chatroom[]) {
      this._chatRooms.next(chatrooms);
    }

    fetchRoomById(chatRoomId: string) {
      return this.httpClient.get<Chatroom>(this.BASEURL + '/chatroom/' + chatRoomId);
    }
}
