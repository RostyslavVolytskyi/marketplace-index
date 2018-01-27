import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eddytor';
  showTable = false;

  openTable(flag: boolean) {
    this.showTable = flag;
  }
}
