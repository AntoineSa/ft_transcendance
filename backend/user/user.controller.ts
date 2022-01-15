import { Get, Post, Delete, Body, Param, Controller, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { UserService }from './user.service';
import { User } from './user.entity';
import { AdminGuard } from '../common/admin.guard';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: User["id"]): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Post()
  @UseGuards(new AdminGuard())
  @UsePipes(new ValidationPipe({ transform: true, forbidNonWhitelisted: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post(':id')
  @UseGuards(new AdminGuard())
  @UsePipes(new ValidationPipe({ transform: true, forbidNonWhitelisted: true }))
  async update(@Param('id') id: User["id"], @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(new AdminGuard())
  async delete(@Param('id') id: User["id"]) {
    this.userService.deleteUser(id);
  }
  
}

