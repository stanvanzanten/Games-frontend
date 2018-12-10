import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GamesComponent } from './components/games/games.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { HomeComponent } from './components/home/home.component';
import { GameService } from './services/games.service';
import { DeveloperService } from './services/developers.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GameEditComponent } from './components/games/games-edit/games-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/signin/signin.component'
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { DeveloperEditComponent } from './components/developers/developer-edit/developer-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path:'developers',component: DevelopersComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    DevelopersComponent,
    HomeComponent,
    GameEditComponent,
    SignupComponent,
    LoginComponent,
    DeveloperEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [
    GameService,
    DeveloperService,
    RegisterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
