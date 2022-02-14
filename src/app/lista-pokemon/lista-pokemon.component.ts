import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css'],
})
export class ListaPokemonComponent implements OnInit {
  @Input()
  public listaFiltrada2: any = [];
  @Input()
  public pokemon: any;

  constructor(private pokemonServico: PokemonService) {}

  public curte(pokemon: boolean) {
    pokemon = true;
    console.log(pokemon);
  }

  ngOnInit(): void {
    this.pokemonServico.listaPokemon.subscribe((res: any) => {
      this.listaFiltrada2 = res.results;
    });
    console.log('consolada do component' + this.listaFiltrada2);
  }
}
