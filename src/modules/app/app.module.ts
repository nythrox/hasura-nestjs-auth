import { Module } from '@nestjs/common';
import { NestPgpromiseModule } from 'nest-pgpromise';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { AuthModule } from '../auth/auth.module';

const pgPromiseFactory = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    if (Boolean(configService.get('USE_DB_CONNECTION_URL'))) {
      return {
        connection: configService.get('DB_CONNECTION_URL'),
      }
    }
    else {
      return {
        connection: {
          host: configService.get('DB_HOST'),
          port: Number(configService.get('DB_PORT')),
          database: configService.get('DB_DATABASE'),
          user: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          ssl: true
        },
      }
    }
  },
  inject: [ConfigService]
}

@Module({
  imports: [NestPgpromiseModule.registerAsync(pgPromiseFactory), AuthModule],
})
export class AppModule { }
