import { Module, DynamicModule } from '@nestjs/common';
import { createMollieClient } from '@mollie/api-client';
import { Services } from 'src/common/services';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
})
export class PaymentsCoreModule {
  static forRoot(): DynamicModule {
    return {
      module: PaymentsCoreModule,
      providers: [
        {
          provide: Services.Mollie,
          useFactory: (configService: ConfigService) => {
            const apiKey = configService.get<string>('MOLLIE_API_KEY');
            return createMollieClient({ apiKey });
          },
          inject: [ConfigService],
        },
      ],
      exports: [Services.Mollie],
    };
  }
}