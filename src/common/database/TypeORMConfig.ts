import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Payment } from 'src/common/schemas/payment.entity';

export default class TypeORMConfig {
    static getORMConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT') || 3306,
            username: configService.get('DB_USER'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            autoLoadEntities: true,
            entities: [Payment],
            synchronize: true,
        };
    }
}