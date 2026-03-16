import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon-service';
import { PokemonInfo } from '../pokemon';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-pokemon-detail',
  imports: [Loader],
  template: `
  <div class="details">
    @if (isLoading) {
      <app-loader />
    } @else if(hasError) {
      <div class="error">
        Failed to load Pokemon details
      </div>
    } @else {
      <div class="pokemon">
        <p class="name">{{ pokemonInfo?.name }}</p>
        <div class="images">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ pokemonInfo?.id }}.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/{{ pokemonInfo?.id }}.png" alt="" />
          <br />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/{{ pokemonInfo?.id }}.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/{{ pokemonInfo?.id }}.png" alt="" />
        </div>
        <p>Number: {{ pokemonInfo?.id }}</p>
        <p>Height: {{ pokemonInfo?.height }}</p>
        <p>Weight: {{ pokemonInfo?.weight }}</p>
      </div>
    }
  </div>
  `,
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail {
  private readonly changeDetectorRef = inject(ChangeDetectorRef)

  route: ActivatedRoute = inject(ActivatedRoute);

  isLoading = true;
  hasError = false;
  
  pokemonId = -1;
  pokemonInfo: PokemonInfo | null = null;
  pokemonService: PokemonService = inject(PokemonService)
  
  constructor(){
    this.pokemonId = Number(this.route.snapshot.params['id'])
  }

  ngOnInit() {
    this.pokemonService.getPokemonById(this.pokemonId).then((pokemonInfoRecieved: PokemonInfo) => {
        this.pokemonInfo = pokemonInfoRecieved;
        this.isLoading = false;
        this.hasError = false;
        this.changeDetectorRef.markForCheck()
    }).catch(() => {
      this.isLoading = false;
      this.hasError = true;
      this.changeDetectorRef.markForCheck()
    })
  }
}
