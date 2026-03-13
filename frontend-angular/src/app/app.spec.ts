import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PokemonService } from './pokemon-service';

class MockPokemonService {
  getFullPokemonList = () => {
    return new Promise(resolve => resolve([
      { id: 1, name: "Carapuce", height: 7, weight: 69 },
      { id: 2, name: "ivysaur", height: 10, weight: 130 }
    ]))
  }
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {provide: PokemonService, useClass: MockPokemonService}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display carapuce', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('squirtle');
  });

});
