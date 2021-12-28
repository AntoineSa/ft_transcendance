import { IsString, IsInt} from 'class-validator';
import { User } from '../user/user.entity';

export class CreateGameDto {

  readonly id: number;

  readonly user1: User;

  readonly user1_score: number;

  readonly user2: User;

  readonly user2_score: number;

  readonly started: Date;

  winner: User;

  url: string;

}
