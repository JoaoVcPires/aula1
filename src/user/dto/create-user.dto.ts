import{IsBoolean,IsInt, IsString, IsNumber, IsDate} from 'class-validator'


export class CreateUserDto {
    @IsString()
    iduser: String;
    @IsString()
    name: String;
    @IsString()
    document: String;
    @IsString()
    password: String;
    @IsString()
    phone: String;
    @IsString()
    email: String;
    @IsBoolean()
    status: Boolean;
}
