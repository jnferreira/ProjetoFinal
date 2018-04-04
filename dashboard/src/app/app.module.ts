import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MeuCatalogoComponent } from './meu-catalogo/meu-catalogo.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MeuCatalogoComponent,
    MeusProdutosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
