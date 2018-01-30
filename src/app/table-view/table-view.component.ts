import { Component, OnInit } from '@angular/core';
import {TableViewService} from "./table-view.service";

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  marketplaceIndex: any;
  commitMsg = 'default commit message from code';
  commitAuthor = 'Incognito';
  showPublishedMsg = false;
  expand = false;

  constructor(private tableViewService: TableViewService) { }

  ngOnInit() {
    this.getMarketplaceIndex();
  }

  getMarketplaceIndex() {
    this.tableViewService.getMarketplaceIndex()
      .subscribe(index => this.marketplaceIndex = index.content);
  }

  getGitMarketplaceIndex() {
    this.tableViewService.getGitMarketplaceIndex()
      .subscribe(index => this.marketplaceIndex = index);
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

  // TODO: create delete child category
  deleteChildCategory(item: any, index: number) {
    console.log('delete child cat', item, index);
  }

  publish() {
    this.tableViewService.publish({
      "commit_message": `${this.commitMsg}`,
      "author_name": `${this.commitAuthor}`,
      "content": JSON.stringify(this.marketplaceIndex)})
      .subscribe(res => {
        this.showPublishedMsg = true;
        setTimeout(() => { this.showPublishedMsg = false; }, 1000);
      });
  }

  expandChildPanel() {
    this.expand = !this.expand;
  }

}
