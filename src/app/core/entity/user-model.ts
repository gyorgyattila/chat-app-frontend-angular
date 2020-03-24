export class User {
    _id: string;
    username: string;
    avatar: any;
    token: string;


    constructor(username: string) {
        this.username = username;
    }

}