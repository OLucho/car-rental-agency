import dotenv = require('dotenv');
dotenv.config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/db.config';
import { CarModule } from './car/car.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), CarModule],
})
export class AppModule {}
