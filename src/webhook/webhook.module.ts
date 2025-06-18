import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { BotService } from 'src/bot/bot.service';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, BotService],
})
export class WebhookModule {}
