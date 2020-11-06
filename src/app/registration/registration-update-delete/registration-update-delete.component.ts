import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
interface Skill {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-update-delete',
  templateUrl: './registration-update-delete.component.html',
  styleUrls: ['./registration-update-delete.component.css']
})

export class RegistrationUpdateDeleteComponent implements OnInit{
  Registration: any = [];
  formGetId: FormGroup;
  formEdit: FormGroup;
  ksuIdEdit:string = '';
  haveReg: boolean;
  edit: boolean;
  delete: boolean;
  type:string='individual';
  firstName:string='';
  lastName:string='';
  email:string='';
  password:string='';
  sponsor: string='';
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

  ngOnInit() {
    this.formGetId = this.formBuilder.group({
      'ksuId': [null, Validators.required]
      });
    this.formEdit = this.formBuilder.group({
      'type' : 'individual',
      'firstName' : null,
      'lastName' : null,
      'email' : null,
      'password' : null,
      'sponsor' : null
    });
  }

  getRegistrationByKsuId(form: FormGroup){
    this.ksuIdEdit =  form.value.ksuId;
    this.api.getRegistrationByKsuId(this.ksuIdEdit).subscribe((data) => {
      this.Registration = data;
      this.haveReg = true;
      console.log(this.haveReg);
      console.log(this.Registration);
    });
  }

  deleteRegistration(id: string){
    this.makeDeleteTrue()
    if (this.haveReg) {
      this.api.deleteRegistration(id).subscribe(res => {
        console.log('delete request has been sent');
      }, (err) => {
        console.log(err);
      });
    }
  }

  makeEditTrue(){
    this.edit = true;
  }
  makeDeleteTrue(){
    this.delete = true;
  }

  editRegistration(id: string, form: FormGroup){
    if (form.invalid){
      console.log("Form is invalid.");
      console.log(form);
      return;
    }
    console.log(form);
    this.api.updateRegistration(this.ksuIdEdit, form)
      .subscribe(res => {
        console.log('registration sent to db');
        this.router.navigate(['/homepage']);
      }, (err) => {
        console.log(err);
      });
  }
}
