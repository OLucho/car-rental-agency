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
  startDate: Date;

  @Column()
  finishDate: Date;

  @Column()
  pricePerDay: number;

  @Column()
  totalPrice: number;

  @Column()
  paymentMethod: ReservationPaymentMethod;

  @Column()
  status: ReservationStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export enum ReservationStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FINISHED = 'FINISHED',
}

export enum ReservationPaymentMethod {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
}
