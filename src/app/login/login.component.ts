import { Component, EventEmitter, Input, Output, OnInit }   from '@angular/core';
import { Router }                                   from '@angular/router';
import { UserService }                              from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  errorMessage: string;
  registerSuccess: boolean;
  mode = 'Observable';

  constructor(
    private userService: UserService,
    private router: Router,
    // private navbar: NavbarComponent
  ) { }

  ngOnInit(){
    this.userService.checkLogin();
    if(this.userService.user.auth){
      //already loggedin
      this.router.navigateByUrl('/');
    }
  }

  login(username: string, password: string) {
    username = username.trim();
    if (!username) { return; }
    this.userService.login(username, password)
      .subscribe(
      res => {
        // console.log(res);
        this.userService.setAuth(res);
        this.registerSuccess = res.success;
        this.userService.checkLogin();
        this.router.navigateByUrl('/');
      }
    )
}
}
