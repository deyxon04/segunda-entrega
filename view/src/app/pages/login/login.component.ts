import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public correo;
  public password;
  public messageResponse;
  public user: User;
  public userSearc;
  constructor(private _userService: UserService, private router: Router) {
    this.user = new User(0, '', '', 0, '')

  }

  ngOnInit() {
  }


  ngSubmitUser() {
    if (this.correo && this.password) {
      this.user.correo = this.correo;
      this.user.document = this.password
      this._userService.ngLogin(this.user).subscribe(response => {
        this.userSearc = JSON.parse(JSON.stringify(response));
        if (this.userSearc.user.rol == "aspirante") {
          localStorage.setItem('user',  JSON.stringify(this.userSearc));
          this.router.navigate(['/main/home/aspirante']);
        }
        if (this.userSearc.user.rol == "coordinador") {
          localStorage.setItem('user',  JSON.stringify(this.userSearc));
          this.router.navigate(['/main/home/coordinador']);
        }
        if (this.userSearc.user.rol == "docente") {
          localStorage.setItem('user',  JSON.stringify(this.userSearc));
          this.router.navigate(['/main/home/docente']);
        }
        if (this.userSearc.user.rol == "interesado") {
          localStorage.setItem('user', JSON.stringify(this.userSearc));
          this.router.navigate(['/main/home/interesado']);
        }
      }, error => {
        console.log(error);
      })

      this.correo = ""
      this.password = ""
    }
    else {
      this.messageResponse = "Rellena todos los campos"
      setTimeout(() => {
        this.messageResponse = false
      }, 2000)
    }
  }
}
