import { Car } from 'src/car/car.entity';
import { Client } from 'src/client/client.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create.Reservation.dto';
import { Reservation, ReservationStatus } from './reservation.entity';

@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation> {
  async createReservation(
    createReservationDto: CreateReservationDto,
    totalDays: number,
    client: Client,
    car: Car,
  ): Promise<Reservation> {
    const {
      finishDate,
      paymentMethod,
      pricePerDay,
      startDate,
      carId,
      clientId,
    } = createReservationDto;

    const reservation = new Reservation();
    reservation.finishDate = finishDate;
    reservation.paymentMethod = paymentMethod;
    reservation.pricePerDay = pricePerDay;
    reservation.startDate = startDate;
    reservation.status = ReservationStatus.PENDING;
    reservation.totalPrice = pricePerDay * totalDays;
    reservation.totalDays = totalDays;
    reservation.client = client;
    reservation.car = car;
    await reservation.save();
    return reservation;
  }

  async getAllReservations(): Promise<Reservation[]> {
    const query = this.createQueryBuilder('Reservation');
    return query.getMany();
  }
}
