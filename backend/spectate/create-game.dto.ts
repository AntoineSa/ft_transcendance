import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUUID, IsDate } from 'class-validator';
import { User } from '../user/user.entity';
import { Game } from '../spectate/spectate.entity';

export class CreateGameDto {

//  @ApiProperty({ required: false })
//  @IsUUID()
  readonly id: Game["id"];

//  @IsDate()
  readonly created_at: Date;

  readonly updated_at: Date;

  readonly version: number;

  @ApiProperty({ required: true }) 
  @IsUUID()
  readonly user1: User["id"];

//  @IsInt()
  readonly user1_score: number;

  @ApiProperty({ required: false }) 
  readonly user2: User["id"];

//  @IsInt()
  readonly user2_score: number;

  readonly ended: Date;

  winner: string;

  url: string;

}
