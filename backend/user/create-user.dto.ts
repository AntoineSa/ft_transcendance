import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUUID, IsDate } from 'class-validator';
import { User } from './user.entity';

export class CreateUserDto {

  readonly id: User["id"];

  readonly created_at: Date;

  readonly updated_at: Date;

  readonly version: number;

  @ApiProperty({ required: true }) 
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  readonly tfa: boolean;

//  @IsInt()
  readonly avatar: string;

//  @IsDate()
  readonly win_number: number;

  readonly lose_number: number;

}
