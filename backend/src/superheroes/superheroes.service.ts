import { Injectable } from '@nestjs/common';
import { Superhero } from '../database/superheroes.interface';
import { CreateSuperheroDto } from './dto/createSuperhero.dto';

@Injectable()
export class SuperheroesService {
  private readonly superheroes: Superhero[] = [];

  addSuperhero(createSuperheroDto: CreateSuperheroDto) {
    this.superheroes.push(createSuperheroDto);

    return {
      message: 'Superhero has been created successfully',
      superheroes: this.superheroes,
    };
  }

  fetchSuperhehroes() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
