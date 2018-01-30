import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bundle-row',
  templateUrl: './bundle-row.component.html',
  styleUrls: ['./bundle-row.component.scss']
})
export class BundleRowComponent implements OnInit {

  @Input() bundle: any;
  expand = false;

  constructor() { }

  ngOnInit() {
  }

  expandChildPanel() {
    this.expand = !this.expand;
  }

}
