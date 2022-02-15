import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-mostra-poke',
  templateUrl: './mostra-poke.component.html',
  styleUrls: ['./mostra-poke.component.css'],
})
export class MostraPokeComponent implements OnInit {
  @Input()
  public listaTabela: any = [];
  public curtida: any;

  constructor(
    private pokemonServico: PokemonService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {}
  curte(pokemonLike: any) {
    console.log(pokemonLike);
    pokemonLike.like = !pokemonLike.like;
  }
  verificaEventoModal($event: boolean, pokemonLike: any) {
    this.curtida = $event;
    pokemonLike.like = !pokemonLike.like;
  }
}
