import { Component, OnInit } from '@angular/core';
import {TableViewService} from "./table-view.service";

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  marketplaceIndex: any;

  constructor(private tableViewService: TableViewService) { }

  ngOnInit() {
    this.getMarketplaceIndex();
  }

  getMarketplaceIndex() {
    this.tableViewService.getMarketplaceIndex()
      .subscribe(index => this.marketplaceIndex = index.content);
  }

  addCategory() {
    let newCategory = {};
    let categoryKeys = Object.keys(this.marketplaceIndex[0]);
    for (const key of categoryKeys) {
      newCategory[key] = '';
    }
    this.marketplaceIndex.push(newCategory);
  }

  deleteItem(item: any, index: number) {
    this.marketplaceIndex.splice(index, 1);
  }

  publish() {
    console.log('publish', this.marketplaceIndex);
  }

}
