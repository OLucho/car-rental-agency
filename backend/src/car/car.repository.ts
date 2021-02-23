import { EntityRepository, Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create.car.dto';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {
  async createCar(createCarDto: CreateCarDto) {
    console.log(createCarDto);
  }
}
