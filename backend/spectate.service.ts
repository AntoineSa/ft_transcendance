import { Injectable } from '@nestjs/common';
import { Game } from './spectate.interface';
 
@Injectable()
export class SpectateService {
  private readonly games: Game[] = [];

  findAllGames(): Game[] {
    return this.games;
  }
 
  create(game: Game) {
    this.games.push(game);
  }
}

