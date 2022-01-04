import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUUID, IsDate } from 'class-validator';
import { User } from '../user/user.entity';

export class UpdateGameDto {

  @ApiProperty({ required: true })
  @IsUUID()
  readonly id: string;

  @ApiProperty({ required: false }) 
  readonly user1: User;

  @IsInt()
  readonly user1_score: number;

  @ApiProperty({ required: false }) 
  readonly user2: User;

  @IsInt()
  readonly user2_score: number;

//  @IsDate()
  readonly started: Date;

  readonly ended: Date;

  winner: User;

  url: string;

}
