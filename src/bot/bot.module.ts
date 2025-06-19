import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
// import { botUpdate } from './bot.update';

@Module({
  controllers: [BotController],
  providers: [BotService, ],
  exports: [BotService],
})
export class BotModule {}
