import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(user: any): User {
    return {
      iduser: user.iduser,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      status: user.status,
      document: user.document,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    //todo método que se comunica com o banco é async
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        document: createUserDto.document,
        email: createUserDto.email,
        password: createUserDto.password,
        phone: createUserDto.phone,
        iduser: createUserDto.iduser,
        status: createUserDto.status,
      },
    });
    return this.mapToEntity(user);
  }

  async findAll(): Promise<User[]> {
    const user = await this.prisma.user.findMany();
    return user.map((user) => this.mapToEntity(user));
  }

  async findOne(iduser: string): Promise<User> {
    const user = await this.prisma.user.findUnique;
    return this.mapToEntity(user);
  }

  async update(document: string,UpdateUserDto: UpdateUserDto) /*: Promise<User>*/ {
    const user = await this.prisma.user.update({
    where:{ document },
    data: UpdateUserDto
    });
    return this.mapToEntity(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
