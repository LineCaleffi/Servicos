import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService] // quando queremos que o serviço seja acessado apenas por um componente declamaramos 
                             // direto na classe de component
})
export class CriarCursoComponent implements OnInit{

  curso: string[] = [];
  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.curso = this.cursosService.getCursos();
  }

  onAddCursos(curso: string){
    this.cursosService.addCurso(curso);
  }
}
