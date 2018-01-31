import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class DataTransferService {

  private subject = new BehaviorSubject<any>({});
  currentSubject = this.subject.asObservable();

  constructor() { }

  changeData(message: string) {
    this.subject.next(message);
  }
}
