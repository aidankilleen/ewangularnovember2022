export class User {

    public id: number;
    public name: string;
    public email: string;
    public active: boolean;

    constructor(
        id: number = -1, 
        name: string = "", 
        email: string = "", 
        active: boolean = false
    ) {
        this.id = id;
        this.name = name;
        this.email =email;
        this.active = active;
    }
}