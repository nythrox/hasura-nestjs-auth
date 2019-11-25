import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../users/user.model';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<UserModel>;
    getNewAccessToken(user: UserModel): Promise<{
        token: any;
        access_token: string;
    }>;
    login(email: string, password: string): Promise<{
        token: any;
        access_token: string;
    }>;
}
