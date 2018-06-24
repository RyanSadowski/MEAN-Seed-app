import { Component, OnInit }        from '@angular/core';
import { UserService }              from '../_services/user.service';
import { Router }                   from '@angular/router';
import { User }                     from '../_models/user'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  errorMessage: string;
  user: User;
  users: User[];

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    if (this.userService.user.admin == false) {
      this.router.navigateByUrl('/');
    } else {
      this.userService.getUsers()
        .subscribe(
        users => {
          console.log(users);
          this.users = users;
          console.log(this.users[0]);
        },
        error => {
          this.errorMessage = <any>error;
          console.log(error);
          });
    }

  }

}
