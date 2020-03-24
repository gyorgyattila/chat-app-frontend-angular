import { User } from './user-model';

export class Message{
    _id: string;
    text: string;
    createdAt: Date;
    user: User;


	constructor(user: User, text: string, createdAt: Date) {
        this.user = user;
        this.text = text;
        this.createdAt = createdAt;
	}

}