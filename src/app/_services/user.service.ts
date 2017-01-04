import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = "http://localhost:3000/api/setup";  // URL to web api

  constructor(private http: Http) { }

  create(username: string, password: string): Observable<any> {
    console.log("make");
    return this.http
      .post(this.url, JSON.stringify({ username: username, password: password }), { headers: this.headers })
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    //console.log(body || {});
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
