import { IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  startDate;

  @IsNotEmpty()
  finishDate;

  @IsNotEmpty()
  pricePerDay;

  @IsNotEmpty()
  totalPrice;

  @IsNotEmpty()
  paymentMethod;

  @IsNotEmpty()
  status;
}
