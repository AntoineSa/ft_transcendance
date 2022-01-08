import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
//import { UserController } from './user/user.controller';
//import { UserService } from './items/profile.service';
//import { ChatController } from './items/chat.controller';
//import { ChatService } from './items/chat.service';
//import { SpectateController } from './spectate/spectate.controller';
import { SpectateModule } from './spectate/spectate.module';
//import { SpectateService } from './spectate/spectate.service';
import { DatabaseModule } from './database.module';

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
    SpectateModule,
    UserModule,
  ],                                    
  controllers: [AppController],
  providers: [AppService],
})                       
export class AppModule {}

