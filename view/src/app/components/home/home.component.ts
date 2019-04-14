import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public user
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'))
   }

  ngOnInit() {
  }

}
