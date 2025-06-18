import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class botUpdate {
  constructor() {}

  @Start()
  clickStart(@Ctx() ctx: Context) {
    console.log(ctx.from);
    ctx.reply('notification');
  }
}
