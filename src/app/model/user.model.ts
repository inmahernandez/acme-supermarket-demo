export class FirebaseUserModel{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    provider: string;
    image: string;

    constructor(){
        this.username = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.phone = "";
        this.provider = "";
        this.image = "";
      }
}