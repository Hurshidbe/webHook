import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { console } from 'inspector/promises';
import { Model } from 'mongoose';
import { Commit } from 'src/models/notifies.model';

@Injectable()
export class WebhookService {
  constructor(@InjectModel(Commit.name) private commitRepo: Model<Commit>) {}

  async notifySaver(data: any) {
    const firstCommit = data.commits[0];
    const newCommit = new this.commitRepo({
      repoName: data.repository.name,
      committerName: firstCommit.committer.name,
      committerEmail: firstCommit.committer.email,
      commitMessage: firstCommit.message,
      commitId: firstCommit.id,
      addedFiles: firstCommit.added,
      removedFiles: firstCommit.removed,
      modifiedFiles: firstCommit.modified,
      commitedTime: firstCommit.timestamp,
    });
    console.log(newCommit);
    return newCommit.save();
  }
}
