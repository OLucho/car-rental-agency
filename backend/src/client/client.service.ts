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

  async updateClient(id: number, updateClientDto): Promise<Client> {
    const {
      address,
      dni,
      email,
      firstName,
      lastName,
      nationality,
      phoneNumber,
    } = updateClientDto;
    const client = await this.getClientById(id);

    client.address = address;
    client.dni = dni;
    client.email = email;
    client.firstName = firstName;
    client.lastName = lastName;
    client.nationality = nationality;
    client.phoneNumber = phoneNumber;
    await client.save();
    return client;
  }

  async deleteClientById(id: number) {
    const result = await this.clientRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
