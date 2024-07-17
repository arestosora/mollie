import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { PaymentsCoreModule } from './payments/core.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PaymentsModule, PaymentsCoreModule, DatabaseModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
