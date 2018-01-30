import {Component, Input, OnInit} from '@angular/core';
import {TableViewService} from "../table-view/table-view.service";

@Component({
  selector: 'category-row',
  templateUrl: './category-row.component.html',
  styleUrls: ['./category-row.component.scss']
})
export class CategoryRowComponent implements OnInit {

  @Input() category: any;
  @Input() index: number;
  expand = false;

  constructor(private tableViewService: TableViewService) { }

  ngOnInit() {
  }

  expandChildPanel() {
    this.expand = !this.expand;
  }

  deleteCategory(index: number) {
    console.log(index);
  }

}
