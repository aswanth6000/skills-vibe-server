import { UserEntity } from "../../entity/user.entity";

export interface IUserCase{
    login(data: UserEntity): Promise<void>;
}