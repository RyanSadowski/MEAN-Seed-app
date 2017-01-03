import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { User }                from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
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
      .then(user => {
        console.log("user");
      });
  }

  ngOnInit() {
    //console.log('init');
    //this.userService.create('username', 'password')
  }

}
