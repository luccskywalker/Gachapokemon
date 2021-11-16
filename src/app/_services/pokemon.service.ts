
import { Pokemon } from './../_module/Pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, mergeAll, mergeMap, Observable, ReplaySubject } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemon: Pokemon[] = [];
  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  private urlTipo: string = 'https://pokeapi.co/api/v2/type'
  public log: any;

  constructor(
    private httpClient: HttpClient,
  ) {
     const link = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    
  }
  get listaPokemon(): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      map(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.httpClient.get<any>(resPokemons.url).pipe(
            map(
              res => res
            )
          ).subscribe(
            res => resPokemons.status = res,
          )
        })
      })
    )

  }
  public pegaPokemon(): Observable<any> {
    return this.httpClient.get(this.url);
    }
    
}