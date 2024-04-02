import { IUserCase } from "../adapters/interfaces/IUserCase";
import { IUserSchema } from "../adapters/interfaces/IUserSchema";
import { UserEntity } from "../entity/user.entity";
import { UserRepository } from "../frameworks/repositories/user.repo";

export class UserUsecase implements IUserCase{
    constructor(private UserRepository: UserRepository){}
    async login(data: UserEntity): Promise<void>{
        return this.UserRepository.login(data)
    }
}