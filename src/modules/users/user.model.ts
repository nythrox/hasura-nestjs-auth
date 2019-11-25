import { HasuraAllowedRolesString } from "../auth/jwt-payload.interface"

export class UserModel {
    public readonly id : string
    public readonly username : string
    public readonly email : string
    public readonly password : string
    public readonly role : HasuraAllowedRolesString
    constructor(user : UserModel){
        this.id = user.id
        this.username = user.username
        this.email = user.email 
        this.password = user.password
        this.role = user.role
    }
}