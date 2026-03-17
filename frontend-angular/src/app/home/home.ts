import { Component, inject, ChangeDetectorRef, WritableSignal, computed, signal } from '@angular/core';

import { Pokemon } from '../pokemon/pokemon';
import { PokemonInfo } from '../pokemon';
import { PokemonService } from '../pokemon-service';
import { Loader } from '../loader/loader';
import { toSignal } from '@angular/core/rxjs-interop';

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
      @if (isLoading()) {
        <app-loader />
      } @else if (hasError()) {
        <div class="error">
          Failed to load Pokemon list
        </div>
      } @else {
        @for (pokemonInfo of pokemonInfoList; track $index){
          <pokemon [pokemonInfo] = "pokemonInfo"/>
        }
      }
    </div>
  </div>
  `,
  styleUrl: './home.css',
})
export class Home {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  pokemonService: PokemonService = inject(PokemonService);
  pokemonInfoList: PokemonInfo[] = [];
  
  isLoading: WritableSignal<boolean> = signal(true)
  hasError: WritableSignal<boolean> = signal(false)

  ngOnInit() {
    this.pokemonService.getFullPokemonList().subscribe({
      next: (pokemonInfoList) => {
        this.hasError.set(false)
        this.isLoading.set(false)
        this.pokemonInfoList = pokemonInfoList
      },
      error: () => {
        this.hasError.set(true)
        this.isLoading.set(false)
      }
    })
  }

}
