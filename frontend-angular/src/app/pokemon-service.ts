import { Injectable } from '@angular/core';
import { PokemonInfo } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

    pokemonInfoList : PokemonInfo[] = [

    {
      name: "Carapuce",
      id: 7,
    },
    {
      name: "Carabaffe",
      id: 8,
    },
    {
      name: "Tortank",
      id: 9,
    }
  ];

  getFullPokemonList(): PokemonInfo[] {
    return this.pokemonInfoList
  }

  getPokemonById(id: number): PokemonInfo | undefined {
    return this.pokemonInfoList.find((pokemonInfo) => pokemonInfo.id === id);
  }

}
