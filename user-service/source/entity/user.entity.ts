export class UserEntity {
    public readonly id: string;
    public readonly username: string;
    public readonly email: string;
    public readonly password: string;
    public readonly otp: number
    public readonly phone: number;
    public readonly profilePicture: string;
    public readonly status: boolean;
    public readonly createdAt: Date;
    public readonly description: string;
    public readonly role: string;
    public readonly updatedAt: Date;
    public readonly clients: string[];
    public readonly skills: string[];
    public readonly portfolio: string;
    public readonly orders: string[];
    public readonly ordersReceived: string[];
    constructor(
        id: string,
        username: string,
        email: string,
        password: string,
        description: string,
        phone: number,
        profilePicture: string,
        otp: number, 
        status: boolean,
        createdAt: Date,
        role: string,
        updatedAt: Date,
        clients: string[],
        skills: string[],
        portfolio: string,
        orders: string[],
        ordersReceived: string[]
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.profilePicture = profilePicture;
        this.status = status;
        this.otp = otp
        this.createdAt = createdAt;
        this.description = description;
        this.role = role;
        this.updatedAt = updatedAt;
        this.clients = clients;
        this.skills = skills;
        this.portfolio = portfolio;
        this.orders = orders;
        this.ordersReceived = ordersReceived;
    }
}



const skillSchema = new Schema({
  value: String,
  label: String,
});
