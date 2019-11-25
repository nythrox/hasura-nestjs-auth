import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

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
        JwtModule.registerAsync(jwtConfigsFactory)
    ],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule {

}
