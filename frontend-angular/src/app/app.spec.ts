import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PokemonService } from './pokemon-service';

class MockPokemonService {
  getFullPokemonList = async () => {
    return Promise.resolve([
      { id: 1, name: "squirtle", height: 7, weight: 69 },
      { id: 2, name: "ivysaur", height: 10, weight: 130 }
    ])
  }
}

class MockPokemonServiceFail {
  getFullPokemonList = async () => {
    return Promise.reject(Error("Testing fails"))
  }
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display error message on fail', async () => {
    TestBed.configureTestingModule({
      providers: [
        {provide: PokemonService, useClass: MockPokemonServiceFail}
      ]
    })
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.ngOnInit()
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.container')?.textContent).toContain('Failed');
  });

  it('should display squirtle', async () => {
    TestBed.configureTestingModule({
      providers: [
        {provide: PokemonService, useClass: MockPokemonService}
      ]
    })
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.ngOnInit()
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.container')?.textContent).toContain('squirtle');
  });

});
