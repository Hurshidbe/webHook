import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class LoggerService {
  constructor() {
    if (!fs.existsSync(path.dirname(this.logFilePath))) {
      fs.mkdirSync(path.dirname(this.logFilePath), { recursive: true });
    }
  }
  private readonly logger = new Logger('WebhookLogger');
  private readonly logFilePath = path.join(__dirname, '../../logs/webhook.log');

  logWriter(data: any) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${data}\n`;
    this.logger.log(data);
    fs.appendFileSync(this.logFilePath, logMessage);
  }

  logError(error: any) {
    const timestamp = new Date().toISOString();
    const errorMessage = `[${timestamp}] ERROR: ${error.message}\n`;
    this.logger.error(error.message);
    fs.appendFileSync(this.logFilePath, errorMessage);
  }
}
