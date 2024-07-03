import { IsString, IsNotEmpty, IsNumberString, IsUrl, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsNumberString()
  @IsNotEmpty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsOptional()
  redirectUrl?: string;

  @IsUrl()
  @IsOptional()
  webhookUrl?: string;
}

