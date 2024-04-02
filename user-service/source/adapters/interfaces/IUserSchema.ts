import { Document, Date, Types } from "mongoose";

export interface IUserSchema extends Document{
    _id: Types.ObjectId,
    username: string;
    phone: number;
    email: string;
    password: string;
    profilePicture: string;
    role: boolean;
    ordersReceived: Types.ObjectId
    createdAt: Date;
    updatedAt: Date;
    status: boolean;
    clients: Types.ObjectId[];
    skills: any;
    portfolio: Types.ObjectId;
    orders: Types.ObjectId;
    description: string
    otp: string | undefined
}