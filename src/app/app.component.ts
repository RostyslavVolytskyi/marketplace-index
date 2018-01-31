import {Component, OnInit} from '@angular/core';
import {AuthService} from "./login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Eddytor';
  showTable: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // check do we have user in local storage
    this.showTable = !!this.authService.getUserFromStorage();
  }

  openTable(flag: boolean) {
    this.showTable = flag;
  }
}
