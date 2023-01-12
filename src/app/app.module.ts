import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
// import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent,
    //ReceberCursoCriadoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
