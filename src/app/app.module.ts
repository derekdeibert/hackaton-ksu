import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import {HomepageComponent} from './homepage/homepage.component';
import {RegistrationIndividualComponent} from './registration/registration-individual-create/registration-individual.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {InfoComponent} from './info/info.component';
import {LoginComponent} from './login/login.component';
import {TeamsComponent} from './teams/teams.component';
import {MatRadioModule} from '@angular/material/radio';
import {RegistrationTeamComponent} from './registration/registration-team-create/registration-team.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

const appRoutes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'register-individual', component: RegistrationIndividualComponent},
  {path: 'info', component: InfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'register-team', component: RegistrationTeamComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    RegistrationIndividualComponent,
    LoginComponent,
    RegistrationTeamComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
