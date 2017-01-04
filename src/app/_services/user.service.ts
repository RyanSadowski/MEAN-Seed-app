import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable()
export class UserService {

private headers = new Headers({'Content-Type': 'application/json'});
private url = "http://localhost:3000/api/setup";  // URL to web api

constructor(private http: Http) { }

create(username: string, password: string): Observable<any> {
  console.log("make");
  return this.http
     .post(this.url, JSON.stringify({username: username, password: password}), {headers: this.headers})
     .map((response: Response) => response.json());
    // .subscribe(result => this.result = result.json());

    //  .map(response => response.json())
    //  .subscribe(result => this.result = result.json());
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
