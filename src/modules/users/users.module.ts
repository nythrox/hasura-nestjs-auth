import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDao } from './users.dao';

@Module({
  providers: [UsersService, UsersDao],
  exports: [UsersService]
})
export class UsersModule {}
