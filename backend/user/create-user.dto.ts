import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { User } from './user.entity';

export class CreateUserDto {

  @ApiProperty({ required: true }) 
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsOptional()
  @IsBoolean()
  readonly tfa: boolean;

//  @IsString()
  readonly avatar: string;

}
