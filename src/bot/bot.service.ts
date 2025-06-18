import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  constructor(@InjectBot() private readonly bot: Telegraf) {}
  async notifyAdmin(userId: number, message: string) {
    await this.bot.telegram.sendMessage(userId, message);
  }
}
