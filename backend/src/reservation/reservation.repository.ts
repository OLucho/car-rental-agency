import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation> {
  async createReservation() {}

  async getAllReservation(): Promise<Reservation[]> {
    const query = this.createQueryBuilder('Reservation');
    return query.getMany();
  }
}
