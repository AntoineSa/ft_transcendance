import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUUID, IsDate } from 'class-validator';
import { Game } from '../spectate/spectate.entity';

export class CreateUserDto {

//  @ApiProperty({ required: false })
//  @IsUUID()
  readonly id: number;

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
