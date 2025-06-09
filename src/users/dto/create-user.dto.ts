import { IsNotEmpty, IsString, isString } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
  
}
