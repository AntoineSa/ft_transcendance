import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsUUID, IsDate, IsOptional, IsNotEmpty, Min, Max } from 'class-validator';
import { User } from '../user/user.entity';

export class UpdateGameDto {

  @IsOptional()
  @IsUUID()
  @IsNotEmpty()
  readonly user1: User["id"];

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)//TODO input true value
  readonly user1_score: number;

  @IsOptional()
  @IsUUID()
  @IsNotEmpty()
  readonly user2: User["id"];

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)//TODO input true value
  readonly user2_score: number;

  @IsOptional()
  @IsDate()
  readonly ended: Date;

  @IsOptional()
  @IsUUID()
  readonly winner: User["id"];

}
