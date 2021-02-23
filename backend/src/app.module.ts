import dotenv = require('dotenv');
dotenv.config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/db.config';
import { CarModule } from './car/car.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), CarModule, ClientModule],
})
export class AppModule {}
