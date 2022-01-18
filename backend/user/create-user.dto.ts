import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean, IsOptional, Length, IsAscii } from 'class-validator';
import { User } from './user.entity';

export class CreateUserDto {

  @ApiProperty({ required: true }) 
  @IsString()
  @IsNotEmpty()
  @IsAscii()
  @Length(1, 20)
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @IsAscii()
  @Length(1, 32)// TODO define values
  readonly password: string;

  @IsOptional()
  @IsBoolean()
  readonly tfa: boolean;

//  @IsString()
  readonly avatar: string;

}
