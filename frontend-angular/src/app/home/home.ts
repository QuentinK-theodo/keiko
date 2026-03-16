import { Component, inject, ChangeDetectorRef } from '@angular/core';

import { Pokemon } from '../pokemon/pokemon';
import { PokemonInfo } from '../pokemon';
import { PokemonService } from '../pokemon-service';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-home',
  imports: [Pokemon, Loader],
  template: `
  <div>
    <div class="intro">
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur Angular et attraper des pokemons !</div>
    </div>
    <div class="container">
      @if (isLoading) {
        <app-loader />
      } @else {
        @if (isPokemonListLoaded) {
          @for (pokemonInfo of pokemonInfoList; track $index){
            <pokemon [pokemonInfo] = "pokemonInfo"/>
          }
        } @else {
          <div class="error">
            Failed to load Pokemon list
          </div>
        }
      }
    </div>
  </div>
  `,
  styleUrl: './home.css',
})
export class Home {
  private readonly changeDetectorRef = inject(ChangeDetectorRef)
  pokemonInfoList: PokemonInfo[] = []
  pokemonService: PokemonService = inject(PokemonService)
  
  isLoading: boolean = true
  isPokemonListLoaded: boolean = true

  ngOnInit() {
    this.pokemonService.getFullPokemonList().then((pokemonInfoList: PokemonInfo[]) => {
      this.pokemonInfoList = pokemonInfoList;
      this.isLoading = false;
      this.isPokemonListLoaded = true;
      this.changeDetectorRef.markForCheck();
    }).catch(() => {
      this.isLoading = false;
      this.isPokemonListLoaded = false;
      this.changeDetectorRef.markForCheck();
    })
  }
}
