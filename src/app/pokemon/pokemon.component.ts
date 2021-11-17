


import { Component } from '@angular/core';
import { Pokemon } from '../_module/Pokemon';
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
  public pF: any = [];

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
  filtroI(event: any){
    console.log("teste", event.target.value);
    this.isDisplayF = false;
      this.pF = [];
      if(event){
      this.lista.map((p: any)=>{
          if(p.status){
            console.log('Status:',p.status);
            if(p.status.types){
              p.status.types.map((t: any)=>{
                console.log('Types: ',t);
                console.log(t.type.name)
                if(t.type.name === event.target.value){
                  this.pF.push(p);
                }
              })
            }
          }
         
        })
        console.log(this.pF);
      }
      else(this.pF = this.lista)
  }

  filtro(key?: string) {
    this.isDisplayF = false;
      this.pF = [];
      if(key){
      this.lista.map((p: any)=>{
          if(p.status){
            console.log('Status:',p.status);
            if(p.status.types){
              p.status.types.map((t: any)=>{
                console.log('Types: ',t);
                console.log(t.type.name)
                if(t.type.name === key){
                  this.pF.push(p);
                }
              })
            }
          }
         
        })
        console.log(this.pF);
      }
      else(this.pF = this.lista)
    
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


