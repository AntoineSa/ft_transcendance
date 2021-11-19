import { Module } from '@nestjs/common';
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
         
@Module({     
  imports: [],                                    
  controllers: [AppController, ItemsController, SpectateController],
  providers: [AppService, ItemsService, SpectateService],
})                       
export class AppModule {}

