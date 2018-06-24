import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { UserService }       from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  errorMessage: string;
  username: string;
  token: string;
  user = this.userService.user

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.checkLogin();
    if(!this.userService.user){
      alert('need to login');
      this.router.navigateByUrl("/login");
    }
    this.getUser();
    this.token = this.userService.user.token;
  }
  
  getUser() {
        this.userService.checkUser(this.userService.user.username)
      .subscribe(
      res => {
        // this.userService.user = res.user;
        console.log(res);
        this.userService.setUser(res);
        this.user = this.userService.user;
      },
      error => this.errorMessage = <any>error);
  }
}
