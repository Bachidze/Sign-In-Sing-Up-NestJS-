import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}

 async create(createUserDto: CreateUserDto) {
  const createdUser = await this.userModel.create(createUserDto)
    return createdUser
  }

 async findAll() {
    const findUser = await this.userModel.find()
    return  findUser
  }

 async findOne(id: string) {
    const findOne = await this.userModel.findById(id)
    return findOne
  }

 async findOneByEmail(email: string) {
    const user = await this.userModel.findOne({email:email}).select("+password")
    return user
  }

 async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true})
    return updatedUser
  }

 async remove(id: string) {
  const remove = await this.userModel.findByIdAndDelete(id)
    return remove
  }
}
