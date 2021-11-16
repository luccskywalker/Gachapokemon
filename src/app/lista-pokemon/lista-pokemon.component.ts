import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  lista = ["poke1", "poke2", "poke3"];
  title = "Lista de Pokemons";

}
