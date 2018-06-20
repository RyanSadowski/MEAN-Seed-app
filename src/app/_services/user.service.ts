
import { Observable , BehaviorSubject}                                      from 'rxjs';
import { Injectable, OnInit }                                               from '@angular/core';
import { Router }                                                           from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest }                             from '@angular/common/http';
import { User }                                                             from '../_models/user';
import { environment }                                                      from '../../environments/environment.prod';

@Injectable()
export class UserService implements OnInit {
  public user = new User;
  public authenticated: boolean;
  public adm: string;
  public admin: boolean;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = environment.apiUrlBase;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  register(username: string, password: string, firstName: string, lastName: string, email: string): Observable<any> {
    console.log("make");
    return this.http
      .post<any>(this.url + "setup", { username: username, password: password, firstName: firstName, lastName: lastName, email: email });//,{headers:this.headers});
      // .post(this.url + "setup", JSON.stringify({ username: username, password: password, firstName: firstName, lastName: lastName, email: email }), { headers: this.headers })
      // .map(this.extractData)
      // .catch(this.handleError);    pre HttpClient way of doing this
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.url + "auth", { username: username, password: password});
      // .post(this.url + "auth", JSON.stringify({ username: username, password: password }), { headers: this.headers })
      // .map(this.extractData)
      // .catch(this.handleError);  pre HttpClient way of doing this
  }

  checkUser(username: string): Observable<any> {
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token') : '';
    if (this.authenticated) {
      return this.http
        .post<any>(this.url + "user" + token, {username: username});
        // .post(this.url + "user" + token, JSON.stringify({ username: username }), { headers: this.headers })
        // .map(this.extractData)
        // .catch(this.handleError); pre HttpClient way of doing this
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
      .get<any>(this.url + "users" + token);
      // .get(this.url + "users" + token, { headers: this.headers })
      // .map(this.extractData)
      // .catch(this.handleError);
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
}
