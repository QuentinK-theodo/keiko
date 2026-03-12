import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Pokemon} from './pokemon/pokemon';
import { PokemonInfo } from './pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemon],
  template: `
  <div class=.intro>
    <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur Angular et attraper des pokemons !</div>
    <pokemon [pokemonInfo] = "carapuceInfo"/>
    <pokemon [pokemonInfo] = "carabaffeInfo"/>
    <pokemon [pokemonInfo] = "tortankInfo"/>
  </div>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend-angular');
  carapuceInfo: PokemonInfo = {
    name: "Carapuce",
    id: 7,
  };
  carabaffeInfo: PokemonInfo = {
    name: "Carabaffe",
    id: 8,
  };
  tortankInfo: PokemonInfo = {
    name: "Tortank",
    id: 9,
  };
  
}


