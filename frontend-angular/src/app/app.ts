import { Component, signal, inject, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon/pokemon';
import { PokemonInfo } from './pokemon';
import { PokemonService } from './pokemon-service';

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
      <input type="text" placeholder="Filter by Pokemon name" #filter />
      <button class="primary" type="button" (click)="filterResults(filter.value)" >Search</button>
    </form>
    @for (pokemonInfo of filteredPokemonInfoList; track $index){
      <pokemon [pokemonInfo] = "pokemonInfo"/>
    }
  </div>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend-angular');
  private readonly changeDetectorRef = inject(ChangeDetectorRef)
  pokemonInfoList: PokemonInfo[] = []
  filteredPokemonInfoList: PokemonInfo[] = []
  pokemonService: PokemonService = inject(PokemonService)

  ngOnInit() {
    this.pokemonService.getFullPokemonList().then((pokemonInfoList: PokemonInfo[]) => {
      this.pokemonInfoList = pokemonInfoList
      this.filteredPokemonInfoList = pokemonInfoList;
      this.changeDetectorRef.markForCheck();
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPokemonInfoList = this.pokemonInfoList;
      return;
    }

    this.filteredPokemonInfoList = this.pokemonInfoList.filter((pokemonInfo) => pokemonInfo?.name.toLowerCase().includes(text.toLowerCase()));
  }
}


