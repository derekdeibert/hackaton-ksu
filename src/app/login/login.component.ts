import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {RegistrationModel} from '../model/registration.model';
import {NavbarService} from '../services/nav.service';
import {LoginService} from '../services/login.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  allRegistrations = [];
  loginForm: FormGroup;
  ksuId:string='';
  PasswordSupplied:string='';
  loggedIn: boolean;
  passwordFromDB: string=''

  constructor(private router: Router,
              private apiService: ApiService,
              private formBuilder: FormBuilder,
              public nav: NavbarService,
              public loginService: LoginService) {
  }
  getPasswordFromDB(form: FormGroup){
    console.log(form);
    this.loggedIn = true;
    this.nav.visible = true;
    this.router.navigate(['/homepage']);
  }
/*  getPasswordFromDB(form: FormGroup){
    this.ksuId = form.value.ksuId;
    this.apiService.login(this.ksuId)
      .subscribe(res => {
        var obj = JSON.parse(res);
        this.passwordFromDB = obj.password;
        console.log(this.passwordFromDB);
      }, (err) => {
        console.log(err);
      });
    if(this.passwordFromDB !== form.value.passwordSupplied){
      return error('Password is incorrect.');
    }
    else{
      this.router.navigate(['/app-profile']);
    }
  }*/

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'ksuId' : [null, Validators.required],
      'passwordSupplied' : [null, Validators.required]
    });
  }
}
