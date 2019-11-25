import { IsEmail, IsNotEmpty, IsNumber, Length } from 'class-validator';
export class LoginDto {
    
    @IsEmail()
    @IsNotEmpty()    
    public readonly email: string;

    @Length(8)
    public readonly password: string;
    
}