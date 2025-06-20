import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class botUpdate {
  constructor() {}

  @Start()
  clickStart(@Ctx() ctx: Context) {
    console.log(ctx.from);
    ctx.reply('Assalomu alaykum. mening WebHook botimga hush kelibsiz');
  }
}

////////////////////////////////////
// const userId = parseInt(process.env.USER_ID!);
// await this.botservice.notifyAdmin(userId, 'webhookdan messsage');
