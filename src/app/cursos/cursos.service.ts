import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>(); // emite o curso que foi adicionado
  //static criouNovoCurso = new EventEmitter<string>();
  
  private cursos: string[] = ['Ciência da Computação','Analise e Desenvolvimento de Sistema','Segurança da Informação']

  constructor() { }

  getCursos(){
    return this.cursos
  }
  
  addCurso(curso: string){
    this.cursos.push(curso); // adiciona um novo curso
    this.emitirCursoCriado.emit(curso) // emite o curso que foi adicionado
    //CursosService.criouNovoCurso.emit(curso);
  }
}
