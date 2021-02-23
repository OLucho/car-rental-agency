import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate;

  @Column()
  finishDate;

  @Column()
  pricePerDay;

  @Column()
  totalPrice;

  @Column()
  paymentMethod;

  @Column()
  status: ReservationStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

enum ReservationStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FINISHED = 'FINISHED',
}
