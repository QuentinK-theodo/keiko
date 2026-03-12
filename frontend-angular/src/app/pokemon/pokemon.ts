import { Component, input } from '@angular/core';
import { PokemonInfo } from '../pokemon';

@Component({
  selector: 'pokemon',
  template: `
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ pokemonInfo().id }}.png" alt="" />
        <p>Name: {{ pokemonInfo().name }}</p>
        <p>Number: {{ pokemonInfo().id }}</p>
      </div>
  `,
})
export class Pokemon {
  pokemonInfo = input.required<PokemonInfo>()
}
