import { UserModel } from "./user.model";
export declare class UsersDao {
    private readonly pg;
    constructor(pg: any);
    findById(id: string): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
}
