import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentsCoreModule } from './core.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/common/schemas/payment.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PaymentsCoreModule.forRoot(),
    TypeOrmModule.forFeature([Payment]),
  ],
  providers: [PaymentsService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
