import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit{
  Teams: any = [];
/*  Teams = [{
    "teamName": "updateAgain",
    "teamSponsor": null,
    "projectDescription": "yo",
    "teamMember1": "yo",
    "teamMember2": "yo",
    "teamMember3": "yo",
    "teamMember4": "oy"}];*/
  constructor(private api: ApiService) {
    this.getAllTeams();
  }
  getAllTeams() {
    this.api.getAllTeams().subscribe(res => {
      console.log('getting all teams...');
      this.Teams = res;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
}
