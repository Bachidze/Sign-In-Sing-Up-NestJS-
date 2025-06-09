import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthGurad } from './auth.guard';
import { signInDto } from './dto/sign-in.dto';
import { signUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("/sign-up")
  signUp(@Body()  signUpDto:signUpDto){
    return this.authService.signUp(signUpDto)
  }

  @Post("/sign-in")
  signIn(@Body()  singInDto:signInDto){
    return this.authService.signIn(singInDto)
  }
  
@UseGuards(AuthGurad)
@Get("/current-user")
getCurrentUser(@Req() request){
  const userId = request.userId
  console.log(userId,"suerID")
return this.authService.getCurrentUser(userId)
}

}
