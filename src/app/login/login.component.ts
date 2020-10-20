import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {RegistrationModel} from '../model/registration.model';
import {NavbarService} from '../services/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  allRegistrations = [];
  loginForm: FormGroup;
  email:string='';
  password:string='';
  loggedIn: boolean;

  constructor(private router: Router,
              private api: ApiService,
              private formBuilder: FormBuilder,
              public nav: NavbarService) {
  }
  onLogin(form: NgForm) {
    this.loggedIn = true;
    this.nav.visible = true;
    if (form.invalid){
      console.log("Form is invalid.");
      return;
    }
    console.log(this.loggedIn);
    if(this.loggedIn){
      this.router.navigate(['homepage']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }
}
