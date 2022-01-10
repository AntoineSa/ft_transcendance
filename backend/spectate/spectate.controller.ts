import { Get, Post, Body, Param, Controller, ValidationPipe, UsePipes } from '@nestjs/common';
import { SpectateService } from './spectate.service';
import { CreateGameDto } from './create-game.dto'
import { UpdateGameDto } from './update-game.dto'
import { Game } from './spectate.entity';


@Controller('spectate')
export class SpectateController {
  constructor(private readonly spectateService: SpectateService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return this.spectateService.findAllGames();
  }

  @Get(':id')
  async findOne(@Param('id') id: Game["id"]): Promise<Game> {
    return this.spectateService.findGameById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.spectateService.createGame(createGameDto);
  }

  @Post(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto): Promise<Game> {
    console.log(id);
    return this.spectateService.updateGame(id, updateGameDto);
  }
}

