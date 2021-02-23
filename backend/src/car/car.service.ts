import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { CarRepository } from './car.repository';
import { CreateCarDto } from './dto/create.car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarRepository) private carRepository: CarRepository,
  ) {}

  async createCar(createCarDto: CreateCarDto): Promise<Car> {
    return await this.carRepository.createCar(createCarDto);
  }

  async getAllCars(): Promise<Car[]> {
    return await this.carRepository.getAllCars();
  }
}
