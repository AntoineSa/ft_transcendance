import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './spectate.entity';
 
@Injectable()
export class SpectateService {
  constructor (
    @InjectRepository(Game)
    private spectateRepository: Repository<Game>,
  ) {}

  findAllGames(): Promise<Game[]> {
    return this.spectateRepository.find();
  }

  findGameById(id: number): Promise<Game> {
    const game = this.spectateRepository.findOne(id);
    if (game) {
      return game;
    }
    throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number): Promise<void> {
    await this.spectateRepository.delete(id);
  }

  async createGame(game: Game) {
    const newGame = await this.spectateRepository.create(game);
    this.spectateRepository.save(newGame);
    return newGame;
  }
}
