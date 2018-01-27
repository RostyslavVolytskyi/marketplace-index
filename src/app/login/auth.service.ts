import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/accounts/auth/login`, user);
  }

}
