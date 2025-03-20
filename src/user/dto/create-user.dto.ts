import{IsBoolean,IsInt, IsString, IsNumber, IsDate} from 'class-validator'


export class CreateUserDto {
    @IsString()
    iduser: string;
    @IsString()
    name: string;
    @IsString()
    document: string;
    @IsString()
    password: string;
    @IsString()
    phone: string;
    @IsString()
    email: string;
    @IsBoolean()
    status: boolean;
}
