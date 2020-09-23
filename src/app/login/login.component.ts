import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {RegistrationModel} from '../model/registration.model';

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

  constructor(private router: Router,
              private api: ApiService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  onLogin(form: NgForm) {
    this.api.getRegistrations()
      .subscribe(data => {
        this.allRegistrations = data;
      }, (err) => {
        console.log(err);
      });

    if(this.validateLogin(this.allRegistrations, form)){
      console.log("login is valid");
    }
    else {
      console.log("login is invalid");
    }
  }

  validateLogin(registrations: RegistrationModel[], form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;

    for(var i = 0; i < registrations.length; i++){
      if(registrations[i].email === email){
        if(registrations[i].password === password){
          return true;
        }
        else return false;
      }
    }
}
}
