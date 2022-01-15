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
    const regex = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    if (!regex.test(id)) {
      throw new HttpException('Invalid id format', HttpStatus.NOT_FOUND);
    }
    await this.spectateRepository.update(id, game);
    const updatedGame = await this.spectateRepository.findOne(id);
    if (updatedGame) {
      return updatedGame;
    }
    throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
  }
}
