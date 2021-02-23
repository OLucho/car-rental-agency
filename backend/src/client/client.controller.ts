import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create.client.dto';
@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    return await this.clientService.createClient(createClientDto);
  }

  @Get()
  async getAllClients(): Promise<Client[]> {
    return await this.clientService.getAllClients();
  }

  @Get('/:id')
  async getClientById(@Param('id', ParseIntPipe) id: number): Promise<Client> {
    return await this.clientService.getClientById(id);
  }

  @Delete('/:id')
  async deleteClientById(@Param('id', ParseIntPipe) id: number) {
    return await this.clientService.deleteClientById(id);
  }
}
