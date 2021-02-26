import { Injectable, NotFoundException } from '@nestjs/common';
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
  async getCarById(id: number): Promise<Car> {
    const car = await this.carRepository.findOne({ where: { id } });

    if (!car) {
      throw new NotFoundException('Car not found');
    }

    return car;
  }
  async updateCar(id: number, updateCarDto: CreateCarDto): Promise<Car> {
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
    } = updateCarDto;
    const car = await this.getCarById(id);

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
  async deleteCarById(id: number) {
    const result = await this.carRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
