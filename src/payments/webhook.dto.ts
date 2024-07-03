import { IsString, IsNotEmpty } from 'class-validator';

export class WebhookDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
