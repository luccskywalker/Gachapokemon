

import { map } from 'rxjs/operators';
import { ListaPokemonComponent } from './../lista-pokemon/lista-pokemon.component';
import { Component } from '@angular/core';
import { Pokemon } from '../_module/Pokemon';
import { Tipos } from '../_module/Tipos';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  public lista: any = [];
  public listaFiltrada: any = [];
  public lista2: any = [];
  public pokemon: Pokemon[] = [];
  public isDisplay = false;
  public isDisplayF = false;

  constructor(
    public pokemonService: PokemonService,


  ) { }

  ngOnInit(): void {
    this.pokemonService.listaPokemon.subscribe(
      res => {
        this.lista = res.results;


      }
    );
    this.isDisplay = true;
    this.isDisplayF = true;
  }

  listarTodos() {
    this.isDisplay = !this.isDisplay;
    this.listaFiltrada = [];
    this.pokemonService.listaPokemon.subscribe((res: any) => {
      this.listaFiltrada = res.results;
    }
    )

  }

  listarPorTipoF() {
    this.isDisplayF = !this.isDisplayF;
    this.listaFiltrada = [];
    this.pokemonService.listaPokemon.subscribe((res: any) => {
      this.listaFiltrada = res.results;
    }
    )

  }


  listarPorJogo() {
    this.listaFiltrada = [];
    this.listaFiltrada = this.pokemonService.listaPokemon.subscribe((res: any) => {
      this.listaFiltrada = res.results;
      console.log(this.listaFiltrada);
    }
    );
  }
  listarPorMega() {
    this.listaFiltrada = [];
    this.listaFiltrada = this.pokemonService.listaPokemon.subscribe((res: any) => {
      this.listaFiltrada = res.results;
      console.log(this.listaFiltrada);
    }
    );
  }
}


