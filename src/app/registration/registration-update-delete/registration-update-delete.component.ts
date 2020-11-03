import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-registration-update-delete',
  templateUrl: './registration-update-delete.component.html',
  styleUrls: ['./registration-update-delete.component.css']
})

export class RegistrationUpdateDeleteComponent implements OnInit{
  Registration: any = [];

  constructor(private api: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.getRegistration();
  }

  ngOnInit() {
  }

  getRegistration(){
    this.api.getRegistrations().subscribe((data) => {
      this.Registration = data;
    });
  }

  deleteRegistration(registration){
    this.api.deleteRegistration(registration.id);
  }
}
