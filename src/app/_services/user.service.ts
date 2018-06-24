
import { Observable, throwError }                                           from 'rxjs';
import { catchError, map, tap }                                             from 'rxjs/operators';
import { Injectable, OnInit }                                               from '@angular/core';
import { Router }                                                           from '@angular/router';
import { HttpClient, HttpErrorResponse }                                    from '@angular/common/http';
import { User }                                                             from '../_models/user';
import { environment }                                                      from '../../environments/environment';
// import { NavbarComponent }                                               from '../navbar/navbar.component';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  public user = new User;
  private url = environment.apiUrlBase;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
    console.log("found user : ", localStorage.getItem('username') );
  }

  register(username: string, password: string, firstName: string, lastName: string, email: string): Observable<any> {
    console.log("make");
    return this.http
      .post<any>(this.url + "setup", { username: username, password: password, firstName: firstName, lastName: lastName, email: email })
      .pipe(
        catchError(this.handleError)
      );
      //,{headers:this.headers});
      // .post(this.url + "setup", JSON.stringify({ username: username, password: password, firstName: firstName, lastName: lastName, email: email }), { headers: this.headers })
      // .map(this.extractData)
      // .catch(this.handleError);    pre HttpClient way of doing this
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.url + "auth", { username: username, password: password})
      .pipe(
        catchError(this.handleError)
      );
  }

  setAuth(data){
    this.user.auth = data.success;
    this.user.admin = data.admin;
    this.user.token = data.token;
    this.user.id = data.userId;
    this.user.username = data.username;
    localStorage.setItem('auth', data.success);
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('admin', data.admin);
  }

  setUser(data){
    console.log(data, ' : id sat' );
    this.user = data.user;
    this.user.auth = data.success;
  }

  checkUser(username: string): Observable<any> {
    var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    if (this.user.auth) {
      return this.http
        .post<any>(this.url + "user" + token, {username: username})
        .pipe(
          catchError(this.handleError)
        );
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
    var token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token') : '';
    return this.http
      .get<any>(this.url + "users" + token)
      .pipe(
        catchError(this.handleError)
      );;
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
    this.user.auth = eval(localStorage.getItem('auth'));
    this.user.token = localStorage.getItem('token');
    this.user.username = localStorage.getItem('username');
    this.user.id = localStorage.getItem('userId');
    this.user.admin = eval(localStorage.getItem('admin'));  
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("There was an error, Please check the Console logs.")
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
