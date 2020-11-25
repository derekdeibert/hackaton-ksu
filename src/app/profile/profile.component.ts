import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  checkIn: boolean = false;
  constructor() { }

  activateCheckIn(){
    this.checkIn = true;
  }
  ngOnInit(): void {
  }

}
