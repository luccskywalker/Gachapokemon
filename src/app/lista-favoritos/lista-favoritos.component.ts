import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css'],
})
export class ListaFavoritosComponent implements OnInit {
  @Input()
  public listaFavoritos: any[] = [];
  public listaFavoritos2: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listaFavoritos2 = this.listaFavoritos.map((res: any) => {
      console.log('consolada de res dos favoritos' + res);
      if (res.results.like === true) {
      }
    });
  }

  listarFavoritos(listaPokemons: any) {
    listaPokemons.map((res: any) => {
      console.log('consolada de res dos favoritos' + res);
      if (res.results.like === true) {
      }
    });
  }
}
