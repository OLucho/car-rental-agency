import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReservationDto } from './dto/create.reservation.dto';
import { Reservation } from './reservation.entity';
import { ReservationRepository } from './reservation.repository';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(ReservationRepository)
    private reservationRepository: ReservationRepository,
  ) {}

  async createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return await this.reservationRepository.createReservation(
      createReservationDto,
    );
  }

  async getAllReservations(): Promise<Reservation[]> {
    return await this.reservationRepository.getAllReservations();
  }
  async getReservationById(id: number): Promise<Reservation> {
    const Reservation = await this.reservationRepository.findOne({
      where: { id },
    });

    if (!Reservation) {
      throw new NotFoundException('Reservation not found');
    }

    return Reservation;
  }

  async deleteReservationById(id: number) {
    const result = await this.reservationRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}