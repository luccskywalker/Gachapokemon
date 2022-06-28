import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private pokemonServico: PokemonService) {}
  public isLoading = false;
  ngOnInit(): void {}

  public testeSubscribe() {
    this.isLoading = true;
    this.pokemonServico.listaPokemon
      .pipe(
        finalize(() => {
          console.log('entrou no segundo subscribe');
          this.pokemonServico.pegaTipos
            .pipe(
              finalize(() => {
                this.isLoading = false;
              })
            )
            .subscribe(
              (res2: any) => {
                console.log(res2);
              },
              (err: any) => {
                console.log(err);
              }
            );
        })
      )
      .subscribe((res: any) => {
        console.log('entrou no primeiro subscribe');
        console.log(res);
      });
  }

  gotoList() {
    console.log('entrou');
    this.router.navigate(['/pokemon']);
  }
}
