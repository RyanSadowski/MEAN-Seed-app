import { Component, EventEmitter, Input, Output }   from '@angular/core';
import { Router }                                   from '@angular/router';
import { Headers, Response }                        from '@angular/http'; //TODO: Find out if I can remove this. 
import { HttpClient }                               from '@angular/common/http';
import { User }                                     from '../_models/user';
import { UserService }                              from '../_services/user.service';
import { NavbarComponent }                          from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  errorMessage: string;
  registerSuccess: boolean;
  res: JSON;
  mode = 'Observable';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  login(username: string, password: string) {
    username = username.trim();
    if (!username) { return; }
    this.userService.login(username, password)
      .subscribe(
      res => {
        this.registerSuccess = res.success;
        this.res = res;
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username);
        localStorage.setItem('userId', res.userId);
        localStorage.setItem('admin', res.admin);
        this.userService.checkLogin();
        this.router.navigateByUrl('/');
      },
      error => this.errorMessage = <any>error);
  }
}
