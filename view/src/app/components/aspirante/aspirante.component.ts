import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styles: []
})
export class AspiranteComponent implements OnInit {
  public cursos
  public messageResponse
  constructor(private _cursosService: CursosService, private _matricula: MatriculaService) { }

  ngOnInit() {
    this._cursosService.ngGetcursos().subscribe(response => {
      this.cursos = response
    }, error => {
      console.log(error);
    })
  }

  ngInsCurso(curso) {
    let aspirante = JSON.parse(localStorage.getItem('user'))
    let cursoAMatricular = {
      documento: aspirante.user.documento,
      nombre: aspirante.user.nombre,
      correo: aspirante.user.correo,
      curso: curso
    }
    this._matricula.ngSetMatricula(cursoAMatricular).subscribe(response => {
      this.messageResponse = response
      setTimeout(() => {
        this.messageResponse = false
      }, 2000);
    }, error => {
      console.log(error);
    })
  }
}
