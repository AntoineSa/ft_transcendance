import { Get, Post, Body, Controller, ValidationPipe, UsePipes } from '@nestjs/common';
import { SpectateService } from './spectate.service';
import { CreateGameDto } from './create-game.dto'
import { Game } from './spectate.entity';


@Controller('spectate')
export class SpectateController {
  constructor(private readonly spectateService: SpectateService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return this.spectateService.findAllGames();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.spectateService.createGame(createGameDto);
  }
}

