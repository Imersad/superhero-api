import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/createSuperhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  @HttpCode(201)
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.addSuperhero(createSuperheroDto);
  }
}
