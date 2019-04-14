import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { keys } from '../keys'

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private _http: HttpClient) { }

  ngSetMatricula(matricula) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.post(keys.url + 'addmatricula', matricula, { headers: headers })
  }
}

