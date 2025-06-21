// src/commit/commit.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Commit extends Document {
  @Prop() repoName: string;
  @Prop() committerName: string;
  @Prop() committerEmail: string;
  @Prop() commitMessage: string;
  @Prop() commitId: string;
  @Prop({ type: [String], default: [] })
  addedFiles: string[];
  @Prop({ type: [String], default: [] })
  removedFiles: string[];
  @Prop({ type: [String], default: [] })
  modifiedFiles: string[];
  @Prop() commitedTime: string;
}

export const CommitSchema = SchemaFactory.createForClass(Commit);
