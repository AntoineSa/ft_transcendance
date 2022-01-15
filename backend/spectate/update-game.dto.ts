import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUUID, IsDate, IsOptional } from 'class-validator';
import { User } from '../user/user.entity';

export class UpdateGameDto {

  @IsOptional()
  @IsUUID()
  readonly user1: User["id"];

  @IsOptional()
  @IsInt()
  readonly user1_score: number;

  @IsOptional()
  @IsUUID()
  readonly user2: User["id"];

  @IsOptional()
  @IsInt()
  readonly user2_score: number;

  @IsOptional()
  @IsDate()
  readonly ended: Date;

//  @Allow()
  @IsOptional()
  @IsUUID()
  readonly winner: User["id"];

}
