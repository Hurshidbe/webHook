import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { BotService } from 'src/bot/bot.service';

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly webhookService: WebhookService,
    private readonly botservice: BotService,
  ) {}

  @Post('github')
  async create(@Body() data: any, @Req() req: any) {
    // const userId = parseInt(process.env.USER_ID!);
    // await this.botservice.notifyAdmin(userId, 'webhookdan messsage');
    try {
      console.log({ data, req });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
