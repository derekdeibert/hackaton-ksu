import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
interface Skill {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration-individual.component.html',
  styleUrls: ['./registration-individual.component.css']
})
export class RegistrationIndividualComponent implements OnInit {
  registrationForm: FormGroup;
  firstName:string='';
  lastName:string='';
  email:string='';
  password:string='';
  sponsor: string='';
  ksuId: string='';
  skills: Skill[] = [
    {value: 'java', viewValue: 'Java'},
    {value: 'cPlus', viewValue: 'C++'},
    {value: 'python', viewValue: 'Python'},
    {value: 'dataAnalysis', viewValue: 'Data Analysis'}
  ];
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
      'sponsor' : [null, Validators.required],
      'ksuId' : [null, Validators.required]
    });
  }

}
