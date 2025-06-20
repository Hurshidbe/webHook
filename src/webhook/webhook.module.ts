import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { BotService } from 'src/bot/bot.service';
import { botUpdate } from 'src/bot/bot.update';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, BotService, botUpdate],
})
export class WebhookModule {}
