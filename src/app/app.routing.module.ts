import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'homepage/register', component: RegistrationComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
