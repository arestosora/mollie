import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import TypeORMConfig from './TypeORMConfig';

export const DatabaseConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeORMConfig.getORMConfig(configService),
    inject: [ConfigService],
  };