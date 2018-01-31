import {Component, Input, OnInit} from '@angular/core';
import {TableViewService} from "../table-view/table-view.service";
import {share, shareReplay} from "rxjs/operators";
import {DataTransferService} from "../services/data-transfer.service";

@Component({
  selector: 'category-row',
  templateUrl: './category-row.component.html',
  styleUrls: ['./category-row.component.scss']
})
export class CategoryRowComponent implements OnInit {

  @Input() category: any;
  @Input() index: number;
  expand = false;
  marketplaceIndex: any;

  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {

  }

  expandChildPanel() {
    this.expand = !this.expand;
  }

  deleteCategory(index: number) {
    this.dataTransferService.currentSubject
      .subscribe(catalog => {
        catalog.splice(index, 1);
      })
  }
}
