import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetail } from './pokemon-detail';
import { provideRouter } from '@angular/router';

describe('PokemonDetail', () => {
  let component: PokemonDetail;
  let fixture: ComponentFixture<PokemonDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetail],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
