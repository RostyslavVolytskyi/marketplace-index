import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMsg = false;

  @Output() openTable = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // if(this.authService.getUserFromStorage()){
    //   this.successMsg = true;
    //   this.openTable.emit(true);
    // }
    //First shouild be login
    // this.openTable.emit(true);
  }

  login(): any {
      return this.authService.login({username: this.username, password: this.password})
        .subscribe(user => {
          this.openTable.emit(true);
        }, err => {
          this.errorMsg = true;
        });
  }

}
