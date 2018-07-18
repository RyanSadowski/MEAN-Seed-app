import { Component, OnInit }      from '@angular/core';
import { UserService }            from '../_services/user.service';
import { Router }                 from '@angular/router';
import { LoginComponent }         from '../login/login.component'
import {BehaviorSubject}          from 'rxjs'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userService = this.service


  constructor(private service: UserService) { }

 
  ngOnInit() {
    this.userService.checkLogin();
  }
  
  logout() {
    this.userService.logout(); 
  }

}
