import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";

const LOCAL_STORAGE_KEY = "EDDYTOR";

@Injectable()
export class AuthService {

  currentUser: any;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/accounts/auth/login`, user)
      .pipe(
        tap((user: any) => {
          this.currentUser = user;
          this.setUserToStorage(user);
        })
      );
  }

  private setUserToStorage(user: any) {
    return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  }

  getUserFromStorage(): any {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  }

}
