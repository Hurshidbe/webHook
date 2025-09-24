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
import { WebhookService } from '../services/webhook.service';
import { BotService } from 'src/bot/bot.service';
import { LoggerService } from 'src/services/logger.service';
import dayjs = require('dayjs');

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly webhookService: WebhookService,
    private readonly botservice: BotService,
    private readonly logger: LoggerService,
  ) {}

  @Post('github')
  async create(@Body() data: any, @Req() req: any) {
    const userId = parseInt(process.env.USER_ID!);
    try {
      const repoName = data.repository.name;
      const firstCommit = data.commits[0]; //commits arrayni belgilab olish
      const CommitterName = firstCommit.committer.name;
      const committerEmail = firstCommit.committer.email;
      const CommitMessage = firstCommit.message;
      const CommitId = firstCommit.id;
      const addedFiles = firstCommit.added;
      const removedFiles = firstCommit.removed;
      const modifiedFiles = firstCommit.modified;
      const commitedTime = dayjs(firstCommit.timestamp)
        .format('YYYY-MM-DD/HH:mm:ss')
        .toString();

      await this.botservice.notifyAdmin(
        userId,
        `📦 Repository: ${repoName}\n👤 Committer name: ${CommitterName}\n📧 Committer email: ${committerEmail}\n💬 Commit text: ${CommitMessage}\n🆔 Commit ID: ${CommitId}\n🕒 Time: ${commitedTime}\n➕ Added: \n${addedFiles.join(',\n') || '❌ Yo`q'}\n➖ Removed:\n${removedFiles.join(',\n') || '❌ Yo`q'}\n🛠 Modified: \n${modifiedFiles.join(',\n') || '❌ yo`q '}`,
      );
      const message = `Repository: ${repoName}; Committer name: ${CommitterName}; Committer email: ${committerEmail}; Commit text: ${CommitMessage};  Commit ID: ${CommitId};  Time: ${commitedTime};  Added:  ${addedFiles.join(',') || 'Yo`q'};  Removed:  ${removedFiles.join(',') || 'Yo`q'};  Modified:  ${modifiedFiles.join(',') || 'yo`q '}`;
      this.logger.logWriter(message);
      return await this.webhookService.notifySaver(data);
    } catch (error) {
      console.log(error.message);
    }
  }
}

//////  sms, email     xizmatlarini ham ulab ko'rish
