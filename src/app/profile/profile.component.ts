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
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token')
    this.checkUser();
  }
  checkUser(){
    this.username = localStorage.getItem('username');
    if(!this.username){
      alert('need to login');
      this.router.navigateByUrl("/login");
    }
    this.userService.checkUser(this.username)
      .subscribe(
      res => {
        //console.log(res);
        this.userService.user = res.user;
      },
      error => this.errorMessage = <any>error);
  }
}
