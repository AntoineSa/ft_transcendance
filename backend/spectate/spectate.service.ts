import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './spectate.entity';
import { UpdateGameDto } from './update-game.dto';
 
@Injectable()
export class SpectateService {
  constructor (
    @InjectRepository(Game)
    private spectateRepository: Repository<Game>,
  ) {}

  findAllGames(): Promise<Game[]> {
    return this.spectateRepository.find();
  }

  findGameById(id: string): Promise<Game> {
    const game = this.spectateRepository.findOne(id);
    if (game) {
      return game;
    }
    throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: string): Promise<void> {
    await this.spectateRepository.delete(id);
  }

  async createGame(game: Game): Promise<Game> {
    const newGame = await this.spectateRepository.create(game);
    this.spectateRepository.save(newGame);
    return newGame;
  }

  async updateGame(id: string, game: UpdateGameDto): Promise<Game> {
    await this.spectateRepository.update(id, game);
    const updatedGame = await this.spectateRepository.findOne(id);
    if (updatedGame) {
      return updatedGame;
    }
    throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
    return game;
  }
}
