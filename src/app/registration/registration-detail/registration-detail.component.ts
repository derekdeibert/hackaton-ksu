import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html'
})
export class RegistrationDetailComponent implements OnInit {

  registration = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id) {
    this.api.getRegistrationById(id)
      .subscribe(data => {
        console.log(data);
        this.registration = data;
      });
  }

  deleteBook(id) {
    this.api.deleteRegistration(id)
      .subscribe(res => {
          this.router.navigate(['/registration']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
