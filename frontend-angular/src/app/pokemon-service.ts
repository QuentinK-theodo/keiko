import { Injectable } from '@angular/core';
import { PokemonInfo } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  backend_base_url = 'http://localhost:8000';

  async getFullPokemonList(): Promise<PokemonInfo[]> {
    const data = await fetch(`${this.backend_base_url}/pokemons`)
    return (await data.json()) ?? [];
  }

}
