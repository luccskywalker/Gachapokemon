import { Component } from '@angular/core';
import { Pokemon } from '../_module/Pokemon';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  public lista: any = [];
  public listaFiltrada: any = [];
  public lista2: any = [];
  public listaTipos: any = [];
  public pokemon: Pokemon[] = [];
  public isDisplay = false;
  public isDisplayF = false;
  public pF: any = [];
  public selectedItem: any;

  constructor(public pokemonService: PokemonService) {
    this.listarTipos();
    this.listarTodos();
  }

  ngOnInit(): void {
    this.pokemonService.listaPokemon.subscribe((res) => {
      res.results.map((element: any) => {
        element.like = false;
      });
      this.listaFiltrada = res.results;
      console.log(this.listaFiltrada);
    });
  }

  listarTodos() {
    this.listaFiltrada = [];
    this.pokemonService.listaPokemon.subscribe((res: any) => {
      this.listaFiltrada = res.results;
    });
  }
  filtroI(event: any) {
    console.log('teste', event.target.value);
    this.isDisplayF = false;
    this.pF = [];
    if (event) {
      this.lista.map((p: any) => {
        if (p.status) {
          console.log('Status:', p.status);
          if (p.status.types) {
            p.status.types.map((t: any) => {
              console.log('Types: ', t);
              console.log(t.type.name);
              if (t.type.name === event.target.value) {
                this.pF.push(p);
              }
            });
          }
        }
      });
      console.log(this.pF);
    } else this.pF = this.lista;
  }

  filtro(key?: string) {
    this.pF = [];
    if (key) {
      this.listaFiltrada.map((p: any) => {
        if (p.status) {
          if (p.status.types) {
            p.status.types.map((t: any) => {
              if (t.type.name === key) {
                this.pF.push(p);
              }
            });
          }
        }
      });
      this.listaFiltrada = this.pF;
      console.log('consolada this pF' + this.pF);
    } else this.pF = this.listaFiltrada;
  }

  onPageIndexChange(event: any) {
    this.pokemonService.mudaOffsetLimit(event, 10);
    this.pokemonService.listaPokemon.subscribe((res: any) => {
      this.listaFiltrada = res.results;
    });
  }

  onChange(newValue: any) {
    console.log(newValue);
    this.filtro(newValue);
  }

  listarTipos() {
    this.pokemonService.pegaTipos.subscribe((res: any) => {
      this.listaTipos = res.results;
    });
  }
}
