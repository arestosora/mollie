import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigAsync } from 'src/common/database/config';

@Module({
    imports: [TypeOrmModule.forRootAsync(DatabaseConfigAsync)],
})
export class DatabaseModule { }
