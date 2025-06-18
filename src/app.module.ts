import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
// import { botUpdate } from './bot/bot.update';
import { BotController } from './bot/bot.controller';

@Module({
  imports: [
    BotModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TelegrafModule.forRoot({
      token: process.env.BOT_API as any,
    }),
    BotModule,
  ],
  controllers: [BotController],
  providers: [],
})
export class AppModule {}
