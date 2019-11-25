
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import { UserModel } from '../../users/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: Boolean(configService.get("JWT_SECRET")),
      secretOrKey: configService.get("JWT_SECRET"),
    });

  }

  async validate(payload: JwtPayloadDto) {
    //set req.user to this \/
    return { id: payload.sub, username: payload.username};
  }

}
