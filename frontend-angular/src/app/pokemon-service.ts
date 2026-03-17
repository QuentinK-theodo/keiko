import { inject, Injectable } from '@angular/core';
import { PokemonInfo } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backend_base_url } from './app.config';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private http = inject(HttpClient  )

  getFullPokemonList(): Observable<PokemonInfo[]> {
    return this.http.get<PokemonInfo[]>(`${backend_base_url}/pokemons`)
  }

  getPokemonById(id: Number): Observable<PokemonInfo> {
    return this.http.get<PokemonInfo>(`${backend_base_url}/pokemon/${id}`);
  }

}
