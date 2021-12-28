import { User } from './user.interface';

export class Game {

  readonly id: string;

  readonly user1: User;

  readonly user1_score: number;

  readonly user2: User;

  readonly user2_score: number;

  readonly started: number;

//  readonly ended: string;

  readonly winner: User;

  readonly url: string;

}
