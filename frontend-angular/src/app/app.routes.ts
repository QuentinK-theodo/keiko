import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: "Home page"
    },
    {
        path: 'pokemon/:id',
        component: PokemonDetail,
        title: "Pokemon details"
    }
];
