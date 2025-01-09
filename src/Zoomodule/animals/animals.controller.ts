import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from '../Dto/create-animal.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  findAll() {
	return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
	return this.animalsService.findOne(+id);
  }

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {
	return this.animalsService.create(createAnimalDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: CreateAnimalDto) {
	return this.animalsService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
	return this.animalsService.remove(+id);
  }
}