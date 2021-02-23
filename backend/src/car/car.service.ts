import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarRepository } from './car.repository';
import { CreateCarDto } from './dto/create.car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarRepository) private carRepository: CarRepository,
  ) {}

  async createCar(createCarDto: CreateCarDto) {
    return await this.carRepository.createCar(createCarDto);
  }
}
