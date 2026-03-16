import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { PokemonService } from '../pokemon-service';
import { provideRouter } from '@angular/router';


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

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();
  });

  it('should create', async () => {
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should display error message on fail', async () => {
    TestBed.resetTestingModule()
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        {provide: PokemonService, useClass: MockPokemonServiceFail}
      ]
    }).compileComponents()
    const fixture = TestBed.createComponent(Home);
    fixture.componentInstance.ngOnInit()
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.container')?.textContent).toContain('Failed');
  });

  it('should display squirtle', async () => {
    TestBed.resetTestingModule()
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        {provide: PokemonService, useClass: MockPokemonService},
        provideRouter([]),
      ]
    }).compileComponents()
    const fixture = TestBed.createComponent(Home);
    fixture.componentInstance.ngOnInit()
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.container')?.textContent).toContain('squirtle');
  });

});
