import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css'],
})
export class ListaFavoritosComponent implements OnInit {
  @Input()
  public listaFavoritos: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  listarFavoritos(listaPokemons: any) {
    listaPokemons.map((res: any) => {
      console.log('consolada de res dos favoritos' + res);
      if (res.results.like === true) {
      }
    });
    this.listaFavoritos = [];
  }
}
