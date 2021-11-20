import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
//import { ProfileController } from './items/profile.controller';
//import { ProfileService } from './items/profile.service';
//import { ChatController } from './items/chat.controller';
//import { ChatService } from './items/chat.service';
import { SpectateController } from './items/spectate.controller';
import { SpectateService } from './items/spectate.service';
import { DatabaseModule } from './items/database.module';

@Module({     
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
    DatabaseModule,
  ],                                    
  controllers: [AppController, ItemsController, SpectateController],
  providers: [AppService, ItemsService, SpectateService],
})                       
export class AppModule {}

