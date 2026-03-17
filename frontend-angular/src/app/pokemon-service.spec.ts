import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon-service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { PokemonInfo } from './pokemon';
import { backend_base_url } from './app.config';

describe('PokemonService', () => {
  let httpMock: HttpTestingController;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(pokemonService).toBeTruthy();
  });

  it('should return squirtle in full list', async () => {
    const mockPokemonInfoList: PokemonInfo[] = [
      { id: 1, name: "squirtle", height: 7, weight: 69 },
      { id: 2, name: "ivysaur", height: 10, weight: 130 }
    ];

    pokemonService.getFullPokemonList().subscribe(pokemmonData => {
      expect(pokemmonData).toEqual(mockPokemonInfoList);
    });

    const req = httpMock.expectOne(`${backend_base_url}/pokemons`);
    expect(req.request.method).toBe('GET');

    req.flush(mockPokemonInfoList);
  });

  it('should return squirtle details', async () => {
    const mockPokemonInfo: PokemonInfo = {name: 'squirtle', id: 7, height: 5, weight: 90};

    pokemonService.getPokemonById(7).subscribe(pokemmonData => {
      expect(pokemmonData).toEqual(mockPokemonInfo);
    });

    const req = httpMock.expectOne(`${backend_base_url}/pokemon/7`);
    expect(req.request.method).toBe('GET');

    req.flush(mockPokemonInfo);
  });
});
