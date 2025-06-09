import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { signUpDto } from './dto/sign-up.dto';
import { signInDto } from './dto/sign-in.dto';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,private JWTService:JwtService) {}

  async signUp(signUpDto: signUpDto) {
    const exsistUser = await this.usersService.findOneByEmail(signUpDto.email);
    if (exsistUser) throw new BadRequestException('user already exsists');
    const hashedPass = await bcrypt.hash(signUpDto.password, 10);
    await this.usersService.create({ ...signUpDto, password: hashedPass });
    return { message: 'user created successfully' };
  }

  async signIn(singInDto:signInDto){
    const exsistUser = await this.usersService.findOneByEmail(singInDto.email)
    if(!exsistUser) throw new BadRequestException("invalid credentials")
        const isPassEqual = await bcrypt.compare(singInDto.password, exsistUser.password)
   if(!isPassEqual) throw new BadRequestException("invalid credentials")

     const payLoad = {
    userId:exsistUser._id
    }
    

    const accessToken =  this.JWTService.sign(payLoad, { expiresIn: '1h' });
    return {accessToken}

  }

  async getCurrentUser(userId:string){
    const user = await this.usersService.findOne(userId)
    return user
  }
}
