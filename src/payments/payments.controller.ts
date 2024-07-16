import { Controller, Post, Body, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './payment.dto';
import { WebhookDto } from './webhook.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) { }

  @Post('create')
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    try {
      const payment = await this.paymentsService.createPayment(createPaymentDto);
      return payment;
    } catch (error) {
      console.log(error);
      throw new HttpException(`Payment creation failed ${error}`, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async getPayment(@Param('id') id: string) {
    try {
      const payment = await this.paymentsService.getPayment(id);
      return payment;
    } catch (error) {
      throw new HttpException('Payment not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('webhook')
  async handleWebhook(@Body() webhookDto: WebhookDto) {
    try {
      const result = await this.paymentsService.handleWebhook(webhookDto);
      return result;
    } catch (error) {
      throw new HttpException(`Webhook handling failed ${error}`, HttpStatus.BAD_REQUEST);
    }
  }
}
