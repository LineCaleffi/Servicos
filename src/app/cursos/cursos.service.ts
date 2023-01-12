import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>(); // emite o curso que foi adicionado
  //static criouNovoCurso = new EventEmitter<string>();
  
  private cursos: string[] = ['Ciência da Computação','Analise e Desenvolvimento de Sistema','Segurança da Informação']

  constructor(private logService: LogService) { }

  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }
  
  addCurso(curso: string){
    this.logService.consoleLog(`Adicionando um novo curso ${curso} na lista`);
    this.cursos.push(curso); // adiciona um novo curso
    this.emitirCursoCriado.emit(curso) // emite o curso que foi adicionado
    //CursosService.criouNovoCurso.emit(curso);
  }
}
