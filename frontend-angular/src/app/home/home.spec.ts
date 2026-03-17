import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { PokemonService } from '../pokemon-service';
import { provideRouter } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PokemonInfo } from '../pokemon';
import { backend_base_url } from '../app.config';


class MockPokemonService {
  getFullPokemonList = () => {
    return new Observable((subscriber) => {
      subscriber.next(
        [
          { id: 1, name: "squirtle", height: 7, weight: 69 },
          { id: 2, name: "ivysaur", height: 10, weight: 130 }
        ]
      )
    })
  }
}

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let httpMock: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideRouter([]),
        provideHttpClientTesting(),
        PokemonService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should create', async () => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should display error message on fail', async () => {
    await fixture.whenStable();

    fixture.detectChanges();
    const req = httpMock.expectOne(`${backend_base_url}/pokemons`)
    req.error(new ProgressEvent("Cannot reach backend"))

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.container')?.textContent).toContain('Failed');
  });

  it('should display squirtle', async () => {
    await fixture.whenStable();

    const mockPokemonInfoList: PokemonInfo[] = [
      { id: 1, name: "squirtle", height: 7, weight: 69 },
      { id: 2, name: "ivysaur", height: 10, weight: 130 }
    ]

    fixture.detectChanges();
    const req = httpMock.expectOne(`${backend_base_url}/pokemons`)
    req.flush(mockPokemonInfoList)

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.container')?.textContent).toContain('squirtle');
  });

});
