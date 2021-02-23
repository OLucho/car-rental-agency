import dotenv = require('dotenv');
dotenv.config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/db.config';
import { CarController } from './car/car.controller';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [CarController],
  providers: [],
})
export class AppModule {}
