import { Game } from '../spectate/spectate.entity';

export class User {

  readonly username: string;

  readonly password: string;

  readonly tfa: boolean;

  readonly avatar: string;//url?

  readonly url: string;

  readonly game_history: Game[];

  readonly win_number: number;

  readonly lose_number: number;

}

