import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.loggedIn = false;
  }
}
