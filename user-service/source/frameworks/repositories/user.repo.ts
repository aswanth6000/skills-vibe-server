import { Model } from "mongoose";
import { IUserCase } from "../../adapters/interfaces/IUserCase";
import { IUserSchema } from "../../adapters/interfaces/IUserSchema";
import { UserEntity } from "../../entity/user.entity";
import { UserModel } from "../model/user.model";
import bcrypt from 'bcrypt'


export class UserRepository implements IUserCase {
    private readonly UserModel: Model<IUserSchema>;
    constructor(UserModel: Model<IUserSchema>) {
        this.UserModel = UserModel
    }
    async login(data: UserEntity): Promise<any> {
        try {
            const { email, password } = data
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = await UserModel.findOne({ email: email }).exec()
            if (user) {
                const passwordMatch = await bcrypt.compare(password, user.password)
                if (passwordMatch) {
                    console.log('Login successful')
                    return user
                } else {
                    console.log("Password mismatch");
                    return false;
                }
            } else {
                console.log("User not found");
                return false;
            }
        } catch (error) {
            console.error("Login failed:", error);
            throw new Error("Login failed");
        }

    } catch(error: Error) {
        console.error('Error!!', error);

    }
}

