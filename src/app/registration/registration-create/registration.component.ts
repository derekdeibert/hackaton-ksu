import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RegistrationModel} from '../../model/registration.model';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  firstName:string='';
  lastName:string='';
  email:string='';
  password:string='';
  sponsor:string='';

  constructor(private api: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  onRegistration(form: NgForm){
    if (form.invalid){
      console.log("Form is invalid.");
      return;
    }
    this.api.postRegistration(form)
      .subscribe(res => {
        this.router.navigate(['/login']);
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'sponsor' : [null, Validators.required]
    });
  }

}
