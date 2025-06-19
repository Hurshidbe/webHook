import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BotService } from './bot.service';

@Controller('bot')
export class BotController {
  constructor(private readonly botService: BotService) {}
  @Get('')
  async recivered() {
    try {
      const userId = parseInt(process.env.USER_ID!);
      await this.botService.notifyAdmin(userId, "http so'rovi tushdi");
      return `botdan ${userId} foidalanuvchiga habar ketdi`;
    } catch (error) {
      console.log(error);
    }
  }
}
