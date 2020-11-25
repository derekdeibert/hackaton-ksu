import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RegistrationModel} from '../../model/registration.model';
import {ApiService} from '../../services/api.service';
import {TeamService} from '../../services/team.service';


@Component({
  selector: 'app-registration-team',
  templateUrl: './registration-team.component.html',
  styleUrls: ['./registration-team.component.css']
})
export class RegistrationTeamComponent implements OnInit {
  teamRegistrationForm: FormGroup;
  type:string='team';
  teamName: string='';
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

  onTeamRegistration(form: NgForm){
    if (form.invalid){
      console.log("Form is invalid.");
      return;
    }
    this.api.postRegistration(form)
      .subscribe(res => {
        this.router.navigate(['/homepage']);
      }, (err) => {
        console.log(err);
      });

  }

  ngOnInit() {
    this.teamRegistrationForm = this.formBuilder.group({
      'type' : ['team', Validators.required],
      'teamName' : [null, Validators.required],
      'teamSponsor' : [null, Validators.required],
      'projectDescription' : [null, Validators.required],
      'teamMember1' : [null, Validators.required],
      'teamMember2' : [null, Validators.required],
      'teamMember3' : [null, Validators.required],
      'teamMember4' : [null, Validators.required]
    });
  }

}
