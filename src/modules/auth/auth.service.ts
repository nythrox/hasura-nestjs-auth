import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../users/user.model';
import { JwtPayload, HasuraAllowedRoles } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

  async validateUser(email: string, pass: string): Promise<UserModel> {
    const user : UserModel = await this.usersService.findByEmail(email);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async getNewAccessToken(user : UserModel) {
    const payload : JwtPayload = { 
      sub: user.id, 
      username: user.username, 
      "x-hasura-claims": {
        "x-hasura-allowed-roles": ['admin', 'user'],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": user.id,
        "x-hasura-role": user.role
      }
    };
    const token = this.jwtService.sign(payload)
    return {
      token: this.jwtService.verify(token),
      access_token: token,
    };
  }


  async login(email: string, password: string){
    const user : UserModel = await this.validateUser(email, password);
    if (!user)
    throw new HttpException('Invalid username or password',HttpStatus.UNAUTHORIZED)
    return this.getNewAccessToken(user);
  }

}
