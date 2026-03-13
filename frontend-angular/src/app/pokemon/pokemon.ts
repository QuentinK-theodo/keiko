import { Component, input } from '@angular/core';
import { PokemonInfo } from '../pokemon';

@Component({
  selector: 'pokemon',
  template: `
      <div class="pokemon">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ pokemonInfo().id }}.png" alt="" />
        <p>Name: {{ pokemonInfo().name }}</p>
        <p>Number: {{ pokemonInfo().id }}</p>
        <p>Height: {{ pokemonInfo().height }}</p>
        <p>Weight: {{ pokemonInfo().weight }}</p>
      </div>
  `,
  styleUrl: './pokemon.css'
})
export class Pokemon {
  pokemonInfo = input.required<PokemonInfo>()
}
