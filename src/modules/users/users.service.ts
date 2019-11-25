import { Injectable, NotFoundException, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { UserModel } from './user.model';
import { throwError } from 'rxjs';
import { UsersModule } from './users.module';
import { NEST_PGPROMISE_CONNECTION } from 'nest-pgpromise';
import { quoted } from '../../shared/utils/quoted';
import { UsersDao } from './users.dao';

@Injectable()
export class UsersService {
    constructor(private readonly usersDao : UsersDao) { }

    async findById(id: string) : Promise<UserModel> {
        return this.usersDao.findById(id)
    }

    async findByEmail(email: string) : Promise<UserModel>{
        return this.usersDao.findByEmail(email)
    }


}
