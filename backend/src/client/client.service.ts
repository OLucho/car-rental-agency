import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientRepository } from './client.repository';
import { CreateClientDto } from './dto/create.client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    return await this.clientRepository.createClient(createClientDto);
  }

  async getAllClients(): Promise<Client[]> {
    return await this.clientRepository.getAllClients();
  }
  async getClientById(id: number): Promise<Client> {
    const client = await this.clientRepository.findOne({ where: { id } });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    return client;
  }

  async deleteClientById(id: number) {
    const result = await this.clientRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
