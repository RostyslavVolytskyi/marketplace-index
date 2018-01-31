import {Component, Input, OnInit} from '@angular/core';
import {DataTransferService} from "../services/data-transfer.service";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'category-row',
  templateUrl: './category-row.component.html',
  styleUrls: ['./category-row.component.scss']
})
export class CategoryRowComponent implements OnInit {

  @Input() category: any;
  @Input() categoryIndex: number;
  expand = false;

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

  addBundle() {
    let newBundle = {};
    this.dataTransferService.currentSubject
      .subscribe(catalog => {
        let bundleKeys = Object.keys(catalog[0].bundles[0]);
        for (const key of bundleKeys) {
          newBundle[key] = key === 'id' ? UUID.UUID() : '';
        }
        catalog[this.categoryIndex].bundles.push(newBundle);
      });
  }
}
