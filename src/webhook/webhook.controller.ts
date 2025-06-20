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
    const userId = parseInt(process.env.USER_ID!);
    try {
      const repoName = data.repository.name;
      const firstCommit = data.commits[0]; //belgilab olish
      const CommitterName = firstCommit.committer.name;
      const committerEmail = firstCommit.committer.email;
      const CommitMessage = firstCommit.message;
      const CommitId = firstCommit.id;
      const addedFiles = firstCommit.added;
      const removedFiles = firstCommit.removed;
      const modifiedFiles = firstCommit.modified;
      const commitedTime = firstCommit.timestamp;

      const message = ` 📦 Repository: ${repoName}\n👤 Committer name: ${CommitterName}\n📧 Committer email: ${committerEmail}\n💬 Commit text: ${CommitMessage}\n🆔 Commit ID: ${CommitId}\n🕒 Time: ${commitedTime}\n➕ Added: ${addedFiles.join('\n') || '❌ Yoq'}\n➖ Removed:${removedFiles.join('\n') || '❌ Yoq'}\n🛠 Modified:${modifiedFiles.join('\n') || '❌ '}`;
      console.log({ data, req });
      await this.botservice.notifyAdmin(
        userId,
        `📦 Repository: ${repoName}\n👤 Committer name: ${CommitterName}\n📧 Committer email: ${committerEmail}\n💬 Commit text: ${CommitMessage}\n🆔 Commit ID: ${CommitId}\n🕒 Time: ${commitedTime}\n➕ Added: \n${addedFiles.join(',\n') || '❌ Yo`q'}\n➖ Removed:\n${removedFiles.join(',\n') || '❌ Yo`q'}\n🛠 Modified: \n${modifiedFiles.join(',\n') || '❌ yo`q '}`,
      );
      return message;
    } catch (error) {
      console.log(error.message);
    }
  }
}

//////  sms, email     xizmatlarini ham ulab ko'rish
