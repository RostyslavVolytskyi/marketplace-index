import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bundle-row',
  templateUrl: './bundle-row.component.html',
  styleUrls: ['./bundle-row.component.scss']
})
export class BundleRowComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
