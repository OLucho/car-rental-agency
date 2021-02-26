import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from 'src/client/client.module';
import { ReservationController } from './reservation.controller';
import { ReservationRepository } from './reservation.repository';
import { ReservationService } from './reservation.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationRepository]), ClientModule],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
