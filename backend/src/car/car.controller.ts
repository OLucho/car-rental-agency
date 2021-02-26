import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
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
  async createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return await this.carService.createCar(createCarDto);
  }

  @Get()
  async getAllCars(): Promise<Car[]> {
    return await this.carService.getAllCars();
  }

  @Get('/:id')
  async getCarById(@Param('id', ParseIntPipe) id: number): Promise<Car> {
    return await this.carService.getCarById(id);
  }

  @Patch('/:id')
  async updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarDto: CreateCarDto,
  ): Promise<Car> {
    return await this.carService.updateCar(id, updateCarDto);
  }

  @Delete('/:id')
  async deleteCarById(@Param('id', ParseIntPipe) id: number) {
    return await this.carService.deleteCarById(id);
  }
}
