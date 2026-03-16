import { Component, input } from '@angular/core';
import { PokemonInfo } from '../pokemon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'pokemon',
  template: `
      <div class="pokemon">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ pokemonInfo().id }}.png" alt="" />
        <p>
          <a [routerLink]="['/pokemon', pokemonInfo().id]">Name: {{ pokemonInfo().name }}</a>
        </p>
        <p>Number: {{ pokemonInfo().id }}</p>
        <p>Height: {{ pokemonInfo().height }}</p>
        <p>Weight: {{ pokemonInfo().weight }}</p>
      </div>
  `,
  styleUrl: './pokemon.css',
  imports: [RouterLink]
})
export class Pokemon {
  pokemonInfo = input.required<PokemonInfo>()
}
