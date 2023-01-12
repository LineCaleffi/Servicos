import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {
  
  curso: string = '';

  constructor(private cursoService: CursosService){}

  ngOnInit() {
    this.cursoService.emitirCursoCriado.subscribe(cursoCriado => this.curso = cursoCriado) // emite o curso que foi adicionado
  }

}