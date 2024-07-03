import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from 'src/common/services';
import { Payment } from 'src/common/schemas/payment.entity';
import { CreatePaymentDto } from './payment.dto';
import { WebhookDto } from './webhook.dto';
import { MollieClient } from '@mollie/api-client';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(Services.Mollie) private readonly mollieClient: MollieClient,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) { }

  async createPayment(createPaymentDto: CreatePaymentDto) {
    const molliePayment = await this.mollieClient.payments.create({
      amount: {
        currency: 'GBP',
        value: createPaymentDto.amount,
      },
      description: createPaymentDto.description,
      redirectUrl:'https://example.com/redirect',
      webhookUrl: 'https://webhook.site/2b4362c4-28cc-4f4f-886f-fec0ca65f895',
    });

    const payment = this.paymentRepository.create({
      mollieId: molliePayment.id,
      amount: parseFloat(molliePayment.amount.value),
      currency: molliePayment.amount.currency,
      description: molliePayment.description,
      redirectUrl: molliePayment.redirectUrl,
      webhookUrl: molliePayment.webhookUrl,
      status: molliePayment.status,
    });

    await this.paymentRepository.save(payment);

    return {
      ...payment,
      paymentUrl: molliePayment.getCheckoutUrl(),
    };
  }

  async getPayment(id: string) {
    return this.paymentRepository.findOne({ where: { mollieId: id } });
  }

  async handleWebhook(webhookDto: WebhookDto) {
    const payment = await this.paymentRepository.findOne({ where: { mollieId: webhookDto.id } });
    if (!payment) {
      throw new Error('Payment not found');
    }

    const molliePayment = await this.mollieClient.payments.get(webhookDto.id);
    payment.status = molliePayment.status;

    await this.paymentRepository.save(payment);

    return { success: true };
  }
}