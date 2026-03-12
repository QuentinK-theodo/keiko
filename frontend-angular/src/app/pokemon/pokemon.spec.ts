import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemon } from './pokemon';
import { PokemonInfo } from '../pokemon';

describe('Pokemon', () => {
  let component: Pokemon;
  let fixture: ComponentFixture<Pokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(Pokemon);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('pokemonInfo', { name : "Carapuce", id: 7})
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
