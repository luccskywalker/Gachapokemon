import { Pokemon } from './../_module/Pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, mergeAll, mergeMap, Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface PokemonCut {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemon: Pokemon[] = [];
  private offset: number = 0;
  private limit: number = 10;
  private tipo: string = '';
  private url: string =
    'https://pokeapi.co/api/v2/pokemon' +
    '?offset=' +
    this.offset +
    '&limit=' +
    this.limit;
  private urlTipo: string = 'https://pokeapi.co/api/v2/type';
  private urlPorTipo: string = 'https://pokeapi.co/api/v2/type/' + this.tipo;

  constructor(private httpClient: HttpClient) {
    const link = 'https://pokeapi.co/api/v2/pokemon/';
  }
  get listaPokemon(): Observable<any> {
    return this.httpClient
      .get<{ results: PokemonCut[]; count: number; next: string }>(this.url)
      .pipe(
        map((res) => res),
        tap((res) => {
          res.results.map((resPokemons: any) => {
            this.httpClient
              .get<any>(resPokemons.url)
              .pipe(map((res) => res))
              .subscribe((res) => (resPokemons.status = res));
          });
        })
      );
  }

  public mudaOffsetLimit(valor: any, limit: any) {
    this.offset = (valor - 1) * 10;
    this.limit = limit;
    this.url =
      'https://pokeapi.co/api/v2/pokemon' +
      '?offset=' +
      this.offset +
      '&limit=' +
      this.limit;
  }

  public mudaTipo(tipo: any) {
    this.tipo = tipo;
    this.urlPorTipo = 'https://pokeapi.co/api/v2/type/' + this.tipo;
  }

  get pegaTipos(): Observable<any> {
    return this.httpClient.get(this.urlTipo);
  }
}
