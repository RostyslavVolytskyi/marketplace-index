import {Component, OnDestroy, OnInit} from '@angular/core';
import {TableViewService} from "./table-view.service";
import {Subscription} from "rxjs/Subscription";
import {DataTransferService} from "../services/data-transfer.service";

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnDestroy {

  marketplaceIndex: any;
  commitMsg = 'default commit message from code';
  commitAuthor = 'Incognito';
  showPublishedMsg = false;
  expand = false;
  marketPlaceIndexSubscription: Subscription;

  constructor(private tableViewService: TableViewService, private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.marketPlaceIndexSubscription = this.getMarketplaceIndex()
      .subscribe(catalog => {
        this.dataTransferService.changeData(catalog);
        this.marketplaceIndex = catalog;
      });
  }

  ngOnDestroy() {
    this.marketPlaceIndexSubscription.unsubscribe();
  }

  // Get index from backend service
  getMarketplaceIndex() {
    return this.tableViewService.getMarketplaceIndex();
  }

  // Get index from GitLab file
  getGitMarketplaceIndex() {
    return this.tableViewService.getGitMarketplaceIndex()
      .subscribe(catalog => {
        this.marketplaceIndex = catalog;
        this.dataTransferService.changeData(catalog);
      });

  }

  addCategory() {
    let newCategory = {};
    let categoryKeys = Object.keys(this.marketplaceIndex[0]);
    for (const key of categoryKeys) {
      newCategory[key] = '';
    }
    this.marketplaceIndex.push(newCategory);
  }

  publish() {
    console.log('publish', this.marketplaceIndex);
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
