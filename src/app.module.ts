import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
// import { botUpdate } from './bot/bot.update';
import { BotController } from './bot/bot.controller';
import { WebhookModule } from './webhook/webhook.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { LoggerService } from './services/logger.service';
dotenv.config();

@Module({
  imports: [
    BotModule,
    MongooseModule.forRoot(process.env.DB_URL || ''),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TelegrafModule.forRoot({
      token: process.env.BOT_API as any,
    }),
    BotModule,
    WebhookModule,
  ],
  controllers: [BotController],
  providers: [LoggerService],
})
export class AppModule {}
