import { HasuraAllowedRolesString } from "../auth/jwt-payload.interface";
export declare class UserModel {
    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: HasuraAllowedRolesString;
    constructor(user: UserModel);
}
