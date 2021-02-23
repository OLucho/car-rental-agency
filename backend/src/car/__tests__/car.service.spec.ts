import { Test } from '@nestjs/testing';
import { CarRepository } from '../car.repository';
import { CarService } from '../car.service';
import { CreateCarDto } from '../dto/create.car.dto';

const mockCarRepository = () => ({
  createCar: jest.fn(),
  getAllCars: jest.fn(),
  findOne: jest.fn(),
  deleteCarById: jest.fn(),
  delete: jest.fn(),
});

const createCarDto: CreateCarDto = {
  brand: 'string',
  model: 'string',
  year: 3,
  kms: 'string',
  color: 'string',
  passengers: 1,
  price: 2,
  image: 'string',
  air_conditioning: 'string',
};

describe('CarService', () => {
  let carService: CarService;
  let carRepository: CarRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CarService,
        { provide: CarRepository, useFactory: mockCarRepository },
      ],
    }).compile();

    carService = moduleRef.get<CarService>(CarService);
    carRepository = moduleRef.get<CarRepository>(CarRepository);
  });

  describe('Create Car', () => {
    it('Create Car calls Repository', async () => {
      await carService.createCar(createCarDto);
      expect(carRepository.createCar).toHaveBeenCalledTimes(1);
      expect(carRepository.createCar).toHaveBeenCalledWith(createCarDto);
    });
  });

  describe('Get All Car', () => {
    it('Get All Cars calls Repository', async () => {
      await carService.getAllCars();
      expect(carRepository.getAllCars).toHaveBeenCalledTimes(1);
      expect(carRepository.getAllCars).toHaveBeenCalledWith();
    });
  });

  describe('Delete Car', () => {});

  describe('Create Car', () => {});
});
