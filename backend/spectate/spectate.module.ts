import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './spectate.entity';
import { SpectateController } from './spectate.controller';
import { SpectateService } from './spectate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [SpectateController],
  providers: [SpectateService],
})
export class SpectateModule {}
