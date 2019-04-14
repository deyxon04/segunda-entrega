import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { keys } from '../keys'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  ngLogin(user) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.post(keys.url + 'login', user, {headers:headers})
  }
  ngadduser(user){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this._http.post(keys.url + 'adduser', user, {headers:headers})
  }
  
}


