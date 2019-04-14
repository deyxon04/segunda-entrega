import { Component, OnInit } from '@angular/core';
import { CursosService } from "../../services/cursos.service";
@Component({
  selector: 'app-coordinador',
  templateUrl: './coordinador.component.html',
  styles: []
})
export class CoordinadorComponent implements OnInit {
  public cursos
  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this._cursosService.ngGetAllcursos().subscribe(response => {
      this.cursos = response
    }, error => {
      console.log(error);
    })
  }
}
