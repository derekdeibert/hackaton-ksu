import {RegistrationModel} from '../models/registration.model'
import {Injectable} from '@angular/core';
import { Subject} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RegistrationService{

  private registration: RegistrationModel[] = [];
  private registrationUpdated = new Subject<RegistrationModel[]>();

  addRegistration(firstName: string, lastName: string, email: string, password: string) {
    const registration: RegistrationModel = {firstName: firstName, lastName: lastName, email: email, password: password};
    this.registration.push(registration);
    this.registrationUpdated.next([...this.registration]);
  }
  getRegistration(){
    return [...this.registration];
  }
  getRegistrationUpdatedListener() {
    return this.registrationUpdated.asObservable();
  }
}
