import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUUID, IsDate } from 'class-validator';
import { Game } from './spectate.entity';
import { User } from '../user/user.entity';

export class UpdateGameDto {

//  @IsUUID()
  readonly id: Game["id"];

  created_at: Date;

  updated_at: Date;

  version: number;

//  @IsUUID()
  readonly user1: User["id"];

//  @IsInt()
  readonly user1_score: number;

//  @IsUUID()
  readonly user2: User["id"];

//  @IsInt()
  readonly user2_score: number;

//  @IsDate()
  readonly ended: Date;

  winner: string;

  url: string;

}
