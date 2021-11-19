import { Get, Body, Controller } from '@nestjs/common';
import { SpectateService }from './spectate.service';
import { Game } from './spectate.interface';


@Controller('spectate')
export class SpectateController {
  constructor(private readonly spectateService: SpectateService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return this.spectateService.findAllGames();
  }
}

