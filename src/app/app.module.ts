import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {ProfileComponent} from './profile/profile.component';
import {SkillSetComponent} from './skill-set/skill-set.component';
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
import {NavbarService} from './services/nav.service';
import {LoginService} from './services/login.service';
import {RegistrationUpdateDeleteComponent} from './registration/registration-update-delete/registration-update-delete.component';


const appRoutes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register-individual', component: RegistrationIndividualComponent},
  {path: 'info', component: InfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'skillset', component: SkillSetComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'register-team', component: RegistrationTeamComponent},
  {path: 'register-update', component: RegistrationUpdateDeleteComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    SkillSetComponent,
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    HomepageComponent,
    RegistrationIndividualComponent,
    LoginComponent,
    RegistrationTeamComponent,
    InfoComponent,
    RegistrationUpdateDeleteComponent
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
  providers: [NavbarService,
  LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
