import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
 
@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  findUserById(id: User["id"]): Promise<User> {
    const user = this.userRepository.findOne(id);
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.create(user);
    this.userRepository.save(newUser);
    return newUser;
  }

  async updateUser(id: User["id"], user: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, user);
    const updatedUser = await this.userRepository.findOne(id);
    if (updatedUser) {
      return updatedUser;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async deleteUser(id: User["id"]): Promise<void> {
    await this.userRepository.delete(id);
  }

}
