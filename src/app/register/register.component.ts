import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { User }                     from '../_models/user';
import { UserService }              from '../_services/user.service';
import { Headers, Response }        from '@angular/http';
import { HttpClient }               from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  registerSuccess: boolean;
  user: User;
  res: JSON;
  mode = 'Observable';

  constructor(
    private userService: UserService,
    private router: Router) { }

  add(username: string, password: string, firstName: string, lastName: string, email: string) {
    username = username.trim();
    if (!username) { return; }
    this.userService.register(username, password, firstName, lastName, email)
      .subscribe(
      res => {
        console.log(res);
        this.registerSuccess = res.success;
        this.res = res;
      },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.userService.checkLogin();
    if(this.userService.user.auth){
      //already loggedin
      this.router.navigateByUrl('/');
    }
  }

}
