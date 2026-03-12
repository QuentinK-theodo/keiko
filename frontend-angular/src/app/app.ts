import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Pokemon} from './pokemon/pokemon';
import { PokemonInfo } from './pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemon],
  template: `
  <div>
    <div class=.intro>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur Angular et attraper des pokemons !</div>
    </div>
    <form>
      <input type="text" placeholder="Filter by Pokemon name" />
      <button class="primary" type="button">Search</button>
    </form>
    @for (pokemonInfo of pokemonInfoList; track $index){
      <pokemon [pokemonInfo] = "pokemonInfo"/>
    }
  </div>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend-angular');
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
  
}


