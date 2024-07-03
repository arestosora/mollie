import { IsString, IsNotEmpty, IsNumberString, IsUrl } from 'class-validator';

export class CreatePaymentDto {
  @IsNumberString()
  @IsNotEmpty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  redirectUrl: string;

  @IsUrl()
  @IsNotEmpty()
  webhookUrl: string;
}

