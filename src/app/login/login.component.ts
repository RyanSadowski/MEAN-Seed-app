import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { User }                from '../_models/user';
import { UserService } from '../_services/user.service';
import { Headers, Response, Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  registerSuccess: boolean;
  user: User;
  res: JSON;
  mode = 'Observable';

  constructor(
    private userService: UserService,
    private router: Router) { }

    login(username: string, password: string) {
      username = username.trim();
      if (!username) { return; }
      this.userService.login(username, password)
        .subscribe(
        res => {
          console.log(res);
          this.registerSuccess = res.success;
          this.res = res;
        },
        error => this.errorMessage = <any>error);
    }

  ngOnInit() {
  }

}
