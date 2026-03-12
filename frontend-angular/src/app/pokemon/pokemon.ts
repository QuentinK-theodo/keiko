import { Component } from '@angular/core';

@Component({
  selector: 'pokemon',
  template: `
  <div class=.intro>
    <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
        <p>{{ name }}</p>
        <p>Number: 7</p>
      </div>
  </div>
  `,
})
export class Pokemon {
  name = 'Carapuce';
  number = 7;
}
