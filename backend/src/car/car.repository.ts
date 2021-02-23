import { EntityRepository, Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create.car.dto';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {
  async createCar(createCarDto: CreateCarDto) {
    const {
      air_conditioning,
      brand,
      color,
      image,
      kms,
      model,
      passengers,
      price,
      year,
    } = createCarDto;

    const car = new Car();
    car.air_conditioning = air_conditioning;
    car.brand = brand;
    car.color = color;
    car.image = image;
    car.model = model;
    car.kms = kms;
    car.passengers = passengers;
    car.price = price;
    car.year = year;
    await car.save();
    return car;
  }
}
