import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class botUpdate {
  constructor() {}

  @Start()
  clickStart(@Ctx() ctx: Context) {
    ctx.reply('Salom Hurshid 👋.\ngithub_actions botingiz ishlayapti ✅. \nIshlaringizga omad.');
  }
}

////////////////////////////////////
// const userId = parseInt(process.env.USER_ID!);
// await this.botservice.notifyAdmin(userId, 'webhookdan messsage');
