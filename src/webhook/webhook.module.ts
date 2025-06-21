import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { BotService } from 'src/bot/bot.service';
import { botUpdate } from 'src/bot/bot.update';
import { MongooseModule } from '@nestjs/mongoose';
import { Commit, CommitSchema } from 'src/models/notifies.model';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, BotService, botUpdate],
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
