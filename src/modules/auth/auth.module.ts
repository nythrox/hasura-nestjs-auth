import { Module, ValidationPipe } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { APP_PIPE } from '@nestjs/core';

const jwtConfigsFactory = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
        return {
            secret: configService.get("JWT_SECRET"),
            signOptions: { expiresIn: configService.get("JWT_EXPIRES_IN") }
        }
    },
    inject: [ConfigService]
}

@Module({
    imports: [
        UsersModule,
        // PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync(jwtConfigsFactory)
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})

export class AuthModule {

}
