import { Injectable, OnInit }               from '@angular/core';
import { Router }                           from '@angular/router';
import { Headers, Response, Http }          from '@angular/http';
import { Observable }                       from 'rxjs';
import { User }                             from '../_models/user';
import {BehaviorSubject}                    from 'rxjs/BehaviorSubject'
import {environment}                        from '../../environments/environment';

@Injectable()
export class UserService implements OnInit {
  public user = new User;
  public authenticated: boolean;
  public adm: string;
  public admin: boolean;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = environment.apiUrlBase;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  register(username: string, password: string, firstName: string, lastName: string, email: string): Observable<any> {
    console.log("make");
    return this.http
      .post(this.url + "setup", JSON.stringify({ username: username, password: password, firstName: firstName, lastName: lastName, email: email }), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(this.url + "auth", JSON.stringify({ username: username, password: password }), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  checkUser(username: string): Observable<any> {
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token') : '';
    if (this.authenticated) {
      return this.http
        .post(this.url + "user" + token, JSON.stringify({ username: username }), { headers: this.headers })
        .map(this.extractData)
        .catch(this.handleError);
    }
    else {
      alert("Please login");
      this.router.navigateByUrl("/login");
      return;
    }
  }

  getUsers(): Observable<any> {
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token') : '';
    return this.http
      .get(this.url + "users" + token, { headers: this.headers })
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
      this.authenticated = true;
      this.user.username = localStorage.getItem("username");
      this.checkAdmin();
    } else {
      this.authenticated = false;
    }
  }
  checkAdmin(){
    this.adm = localStorage.getItem("admin");
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body || {});
    return body || {};
  }

  private handleError(error: Response | any) {
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
