import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Car } from './car.entity';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create.car.dto';
@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carService.createCar(createCarDto);
  }
}
