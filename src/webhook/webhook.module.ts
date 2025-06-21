import { Module } from '@nestjs/common';
import { WebhookService } from '../services/webhook.service';
import { WebhookController } from './webhook.controller';
import { BotService } from 'src/bot/bot.service';
import { botUpdate } from 'src/bot/bot.update';
import { MongooseModule } from '@nestjs/mongoose';
import { Commit, CommitSchema } from 'src/models/notifies.model';
import { LoggerService } from 'src/services/logger.service';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, BotService, LoggerService, botUpdate],
  imports: [
    MongooseModule.forFeature([
      {
        name: Commit.name,
        schema: CommitSchema,
      },
    ]),
  ],
})
export class WebhookModule {}
