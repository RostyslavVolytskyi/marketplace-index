import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
