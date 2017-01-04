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
  user: User;
  result: JSON;
  //userService: UserService;

  constructor(
    private userService: UserService,
    private router: Router) {
    this.userService = userService;

  }

  add(username: string, password: string): void {
    username = username.trim();
    if (!username) { return; }
    this.userService.create(username, password)
      .map(response => response)
      .subscribe(function(response) { console.log("Success Response" + response)});
  //  console.log(this.result);
  }

  ngOnInit() {
    //console.log('init');
    //this.userService.create('username', 'password')
  }

}
