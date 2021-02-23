import dotenv = require('dotenv');
dotenv.config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
