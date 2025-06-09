import { IsNotEmpty, IsString, isString } from 'class-validator';

export class signUpDto {

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
