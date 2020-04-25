import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ContatosListagemComponent } from 'src/pages/contatos-listagem/contatos-listagem.component';
import { ContatoService } from 'src/services/contato.service';
import { FilmesComponent } from '../pages/contatos-listagem/filmes/filmes.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    FilmesComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
