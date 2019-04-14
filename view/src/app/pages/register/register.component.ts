import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  public documento;
  public nombre;
  public correo;
  public telefono;
  public user: User
  public messageResponse;
  public ErrorResponse
  constructor(private _userService: UserService) {
    this.user = new User(0, '', '', 0, '')
  }

  ngOnInit() {
  }

  ngSubmitUser() {
    if (this.correo && this.documento  && this.nombre && this.telefono ) {
      this.user.correo = this.correo;
      this.user.document = this.documento;
      this.user.nombre = this.nombre;
      this.telefono = this.telefono
      this._userService.ngadduser(this.user).subscribe(response => {
      }, error => {
        this.ErrorResponse = error
      setTimeout(() => {
        this.ErrorResponse = false
      }, 2000)
      })
    } else {
      this.messageResponse = true;
      setTimeout(() => {
        this.messageResponse = false
      }, 2000)
    }
    this.correo = ""
    this.documento = ""
    this.nombre = ""
    this.telefono = ""
  }
}
