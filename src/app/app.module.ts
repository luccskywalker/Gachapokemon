import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BannersComponent } from './banners/banners.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { PokemonService } from './_services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MostraPokeComponent } from './mostra-poke/mostra-poke.component';
import { ModalPokemonComponent } from './modal-pokemon/modal-pokemon.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ListaFavoritosComponent } from './lista-favoritos/lista-favoritos.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HomeComponent } from './home/home.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BannersComponent,
    ListaPokemonComponent,
    MostraPokeComponent,
    ModalPokemonComponent,
    ListaFavoritosComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pokemon', component: PokemonComponent },
      { path: 'mostra', component: MostraPokeComponent },
    ]),
    FormsModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzPaginationModule,
    NzLayoutModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzModalModule,
    NzPopoverModule,
    NzIconModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
  ],
  providers: [PokemonService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
