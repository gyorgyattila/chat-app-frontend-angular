import { User } from './user-model';
import { Message } from './message-model';

export class Chatroom {
    _id: string;
    name: string;
    members: User[];
    messages: Message[];
    type: string;
    password: string;


    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}