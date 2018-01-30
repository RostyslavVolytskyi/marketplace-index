import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'category-row',
  templateUrl: './category-row.component.html',
  styleUrls: ['./category-row.component.scss']
})
export class CategoryRowComponent implements OnInit {

  @Input() category: any;
  expand = false;

  constructor() { }

  ngOnInit() {
  }

  expandChildPanel() {
    this.expand = !this.expand;
  }

}
