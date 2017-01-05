import { Injectable, OnInit }    from '@angular/core';
import { Router }            from '@angular/router';
import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class UserService implements OnInit {
  public user = new User;
  public authenticated: boolean;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = "http://localhost:3000/api/";  // URL to web api

  constructor(
    private http: Http,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  register(username: string, password: string): Observable<any> {
    console.log("make");
    return this.http
      .post(this.url + "setup", JSON.stringify({ username: username, password: password }), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }
  login(username: string, password: string): Observable<any> {
    return this.http
      .post(this.url + "auth", JSON.stringify({ username: username, password: password }), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);

  }
  logout() {
    localStorage.clear();
    this.checkLogin();
    this.router.navigateByUrl('/');
  }

  checkLogin() {
    if (localStorage.getItem('token')) {
      //console.log("loggedIn");
      this.authenticated = true;
      this.user = new User;
      this.user.username = localStorage.getItem("username");
    } else {
      //console.log("logged Out");
      this.authenticated = false;
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body || {});
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
