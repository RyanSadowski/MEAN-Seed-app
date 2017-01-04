import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { User }                from '../_models/user';
import { UserService } from '../_services/user.service';
import { Headers, Response, Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  saveSuccess: boolean;
  user: User;
  result: JSON;
  mode = 'Observable';
  alert: string;

  constructor(
    private userService: UserService,
    private router: Router) {}

  add(username: string, password: string) {
    username = username.trim();
    if (!username) { return; }
    this.userService.create(username, password)
      .subscribe(
        res => {
          console.log(res);
          this.result = res.success;
          this.saveSuccess = true;
          //this.alert = res.alert;
        },
        error => this.errorMessage = <any>error);


  //  console.log(this.result);
  }

  ngOnInit() {
    //console.log('init');
    //this.userService.create('username', 'password')
  }

}
