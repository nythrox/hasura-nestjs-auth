import { UserModel } from './user.model';
import { UsersDao } from './users.dao';
export declare class UsersService {
    private readonly usersDao;
    constructor(usersDao: UsersDao);
    findById(id: string): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
}
