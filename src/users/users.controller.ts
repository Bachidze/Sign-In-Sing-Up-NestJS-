import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGurad } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch()
  @UseGuards(AuthGurad)
  update(@Req() request, @Body() updateUserDto: UpdateUserDto) {
    const userId = request.userId
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete()
  @UseGuards(AuthGurad)
  remove(@Req() request) {
    const userId = request.userId
    return this.usersService.remove(userId);
  }
}
