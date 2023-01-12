import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  
  cursos: string[] = [];
  //cursosService: CursosService -> não é uma boa prática

  constructor(private cursosService: CursosService){
    //this.cursosService = new CursosService; -> não é uma boa prática
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos(); //puxa os dados que está no getCursos que estáa na service

    this.cursosService.emitirCursoCriado.subscribe( curso => console.log(curso));
  }

}
