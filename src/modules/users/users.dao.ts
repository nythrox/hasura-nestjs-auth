import { Injectable, Inject } from "@nestjs/common";
import { NEST_PGPROMISE_CONNECTION } from "nest-pgpromise";
import { UserModel } from "./user.model";
import { quoted } from "../../shared/utils/quoted";

@Injectable()
export class UsersDao {
    constructor(@Inject(NEST_PGPROMISE_CONNECTION) private readonly pg) { }
    
    async findById(id: string) : Promise<UserModel> {
        const user = await this.pg.one("SELECT * FROM public.user WHERE id = " + quoted(id))
        return new UserModel({
            username: user.username,
            id: user.id,
            password: user.password,
            email: user.email,
            role: "admin"
        })
    }

    async findByEmail(email: string) : Promise<UserModel> {
        const user = await this.pg.one("SELECT * FROM public.user WHERE email = " + quoted(email))
        return new UserModel({
            username: user.username,
            id: user.id,
            password: user.password,
            email: user.email,
            role: "admin"
        })
    }
}