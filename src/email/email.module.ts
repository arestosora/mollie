import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { HtmlService } from './html.service';

@Module({
  controllers: [EmailController],
  providers: [EmailService, HtmlService]
})
export class EmailModule { }
