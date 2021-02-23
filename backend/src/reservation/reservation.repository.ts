import { EntityRepository, Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create.Reservation.dto';
import { Reservation } from './reservation.entity';

@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation> {
  async createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const {
      finishDate,
      paymentMethod,
      pricePerDay,
      startDate,
      status,
      totalPrice,
    } = createReservationDto;

    const reservation = new Reservation();
    reservation.finishDate = finishDate;
    reservation.paymentMethod = paymentMethod;
    reservation.pricePerDay = pricePerDay;
    reservation.startDate = startDate;
    reservation.status = status;
    reservation.totalPrice = totalPrice;

    await reservation.save();
    return reservation;
  }

  async getAllReservations(): Promise<Reservation[]> {
    const query = this.createQueryBuilder('Reservation');
    return query.getMany();
  }
}
