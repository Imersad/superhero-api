import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from '../superheroes.controller';
import { SuperheroesService } from '../superheroes.service';

describe('SuperheroesController', () => {
  let superheroesController: SuperheroesController;
  let superheroesService: SuperheroesService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    superheroesController = moduleRef.get<SuperheroesController>(
      SuperheroesController,
    );
    superheroesService = moduleRef.get<SuperheroesService>(SuperheroesService);
  });

  describe('fetchSuperheroes', () => {
    it('should return superheroes sorted by humility score', () => {
      const superheroes = [
        {
          name: 'Hero A',
          superpower: 'Flying',
          humilityScore: 5,
        },
        {
          name: 'Hero B',
          superpower: 'Invisibility',
          humilityScore: 8,
        },
      ];

      jest
        .spyOn(superheroesService, 'fetchSuperheroes')
        .mockReturnValue(superheroes);
    });
  });
});
