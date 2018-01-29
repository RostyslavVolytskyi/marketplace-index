import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable()
export class TableViewService {

  constructor(private http: HttpClient) { }

  getMarketplaceIndex(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/marketplace/index?sort=name`, environment.httpOptions)
      .pipe(
        tap(index => console.log(`index`, index.content))
      );
  }

  publish(body) {
    const httpOptions = {
      headers: new HttpHeaders({ 'PRIVATE-TOKEN': `${environment.gitLabToken}` })
    };

    return this.http.put(`${environment.gitLabRepository}`, body, httpOptions);
  }

}
