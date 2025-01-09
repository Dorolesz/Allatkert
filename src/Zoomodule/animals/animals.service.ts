import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateAnimalDto } from '../Dto/create-animal.dto';
import { UpdateAnimalDto } from '../Dto/update-animal.dto';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
	return this.prisma.animal.findMany();
  }

  async findOne(id: number) {
	return this.prisma.animal.findUnique({ where: { id } });
  }

  async create(createAnimalDto: CreateAnimalDto) {
	return this.prisma.animal.create({ data: createAnimalDto as any});
  }

  async update(id: number, updateAnimalDto: CreateAnimalDto) {
	return this.prisma.animal.update({
	  where: { id },
	  data: updateAnimalDto,
	});
  }

  async remove(id: number) {
	return this.prisma.animal.delete({ where: { id } });
  }
}