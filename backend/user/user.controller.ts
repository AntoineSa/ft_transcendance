import { Get, Post, Body, Controller, UsePipes, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService }from './user.service';
import { User } from './user.entity';
import { ValidationPipe } from '../common/validation.pipe';
import { AdminGuard } from '../common/admin.guard';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Post()
  @UseGuards(new AdminGuard())
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }
}

