import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateReservationDto } from './dto/create.reservation.dto';
import { Reservation } from './reservation.entity';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createReservation(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return await this.reservationService.createReservation(
      createReservationDto,
    );
  }

  @Get()
  async getAllReservations(): Promise<Reservation[]> {
    return await this.reservationService.getAllReservations();
  }

  @Get('/:id')
  async getReservationById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Reservation> {
    return await this.reservationService.getReservationById(id);
  }

  @Delete('/:id')
  async deleteReservationById(@Param('id', ParseIntPipe) id: number) {
    return await this.reservationService.deleteReservationById(id);
  }
}
