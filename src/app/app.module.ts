import './rxjs-extensions';
import { BrowserModule }            from '@angular/platform-browser';
import { RouterModule }             from '@angular/router';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';
import { routes }                   from './app.routes';
import { AppComponent }             from './app.component';
import { RegisterComponent }        from './register/register.component';
import { LoginComponent }           from './login/login.component';
import { HomeComponent }            from './home/home.component';
import { NavbarComponent }          from './navbar/navbar.component';
import { UserService }              from './_services/user.service';
import { ProfileComponent }         from './profile/profile.component';
import { AdminComponent }           from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
