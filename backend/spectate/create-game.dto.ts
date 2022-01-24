import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator';
import { User } from '../user/user.entity';

export class CreateGameDto {

  @IsUUID()
  @IsNotEmpty()
  readonly user1: User["id"];

  @IsOptional()
  @IsUUID()
  @IsNotEmpty()
  readonly user2: User["id"];
}
