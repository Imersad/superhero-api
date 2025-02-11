import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from '../superheroes.service';

describe('SuperheroesService', () => {
  let superheroesService: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    superheroesService = module.get<SuperheroesService>(SuperheroesService);
  });

  describe('fetchSuperheroes', () => {
    it('should return superheroes sorted by humility score', () => {
      superheroesService.addSuperhero({
        name: 'Hero A',
        superpower: 'Flying',
        humilityScore: 5,
      });
      superheroesService.addSuperhero({
        name: 'Hero B',
        superpower: 'Invisibility',
        humilityScore: 8,
      });
      const heroes = superheroesService.fetchSuperheroes();
      expect(heroes[0].name).toBe('Hero B');
      expect(heroes[0].superpower).toBe('Invisibility');
      expect(heroes[0].humilityScore).toBe(8);
    });
  });
});
