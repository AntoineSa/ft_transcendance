import { IsString, IsInt, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { User } from './user.entity';

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsOptional()
  @IsBoolean()
  readonly tfa: boolean;

//  @IsString()
  readonly avatar: string;

  @IsOptional()
  @IsInt()
  readonly win_number: number;

  @IsOptional()
  @IsInt()
  readonly lose_number: number;

}
