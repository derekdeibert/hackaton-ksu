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
  formTeamReg: FormGroup;
  formTeamEdit: FormGroup;
  ksuIdEdit:string = '';
  haveIndReg: boolean;
  haveTeamReg: boolean;
  edit: boolean;
  teamEdit: boolean;
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
  teamName: string='';
  teamNameEdit: string='';
  typeTeam:string='team';
  teamSponsor: string='';
  projectDescription: string='';
  teamMember1:string='';
  teamMember2:string='';
  teamMember3:string='';
  teamMember4:string='';

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
    this.formTeamReg = this.formBuilder.group({
      'teamNameEdit': null
    });
    this.formTeamEdit = this.formBuilder.group({
      'typeTeam' : ['team', Validators.required],
      'teamName' : [null, Validators.required],
      'teamSponsor' : [null, Validators.required],
      'projectDescription' : [null, Validators.required],
      'teamMember1' : [null, Validators.required],
      'teamMember2' : [null, Validators.required],
      'teamMember3' : [null, Validators.required],
      'teamMember4' : [null, Validators.required]
    })
  }

  getRegistrationByKsuId(form: FormGroup){
    this.ksuIdEdit =  form.value.ksuId;
    this.api.getRegistrationByKsuId(this.ksuIdEdit).subscribe((data) => {
      this.Registration = data;
      this.haveIndReg = true;
      console.log(this.haveIndReg);
      console.log(this.Registration);
    });
  }

  getRegistrationByTeamName(form: FormGroup){
    this.teamNameEdit = form.value.teamNameEdit;
    this.api.getRegByTeamName(this.teamNameEdit).subscribe(res => {
      this.haveTeamReg = true;
      console.log('getting team registration');
    }, (err) => {
      console.log(err);
    });
  }

  deleteIndRegistration(id: string){
    this.makeDeleteTrue();
    if (this.haveIndReg) {
      this.api.deleteRegistration(id).subscribe(res => {
        console.log('delete request has been sent');
      }, (err) => {
        console.log(err);
      });
    }
  }

  deleteTeamRegistration(teamName: string){
    this.makeDeleteTrue();
    if (this.haveIndReg) {
      this.api.deleteByTeam(teamName).subscribe(res => {
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
  makeTeamEditTrue() {
    this.teamEdit = true;
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

  editTeamRegistration(id: string, form: FormGroup){
    console.log(form);
    console.log(id);
    this.api.updateTeamRegistration(this.teamNameEdit, form)
      .subscribe(res => {
        console.log('registration sent to db');
        this.router.navigate(['/homepage']);
      }, (err) => {
        console.log(err);
      });
  }
}
