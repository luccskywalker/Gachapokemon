import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MostraPokeComponent } from './mostra-poke/mostra-poke.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'mostra', component: MostraPokeComponent },
  { path: 'pokemon', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
