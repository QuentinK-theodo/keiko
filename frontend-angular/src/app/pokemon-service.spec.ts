import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon-service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return squirtle in full list', async () => {
    await expect(service.getFullPokemonList()).resolves.toContainEqual({name: 'squirtle', id: 7, height: 5, weight: 90});
  });

  it('should return squirtle details', async () => {
    await expect(service.getPokemonById(7)).resolves.toEqual({name: 'squirtle', id: 7, height: 5, weight: 90});
  });
});
