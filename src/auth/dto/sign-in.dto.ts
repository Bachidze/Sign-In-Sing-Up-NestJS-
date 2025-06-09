import { IsNotEmpty, IsString, isString, Length } from 'class-validator';

export class signInDto {


  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6,20)
  password: string;
  
}
