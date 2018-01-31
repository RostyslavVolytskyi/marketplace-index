import {Component, Input, OnInit} from '@angular/core';
import {DataTransferService} from "../services/data-transfer.service";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'bundle-row',
  templateUrl: './bundle-row.component.html',
  styleUrls: ['./bundle-row.component.scss']
})
export class BundleRowComponent implements OnInit {

  @Input() bundle: any;
  @Input() bundleIndex: number;
  @Input() categoryIndex: number;
  expand = false;

  constructor(private dataTransferService: DataTransferService ) { }

  ngOnInit() {
  }

  expandChildPanel() {
    this.expand = !this.expand;
  }

  deleteBundle(index: number) {
    // console.log('deleteBundleindex', index, this.categoryIndex);
    this.dataTransferService.currentSubject
      .subscribe(catalog => {
        catalog[this.categoryIndex].bundles.splice(index, 1);
      })
  }

  addItem() {
    let newItem = {};
    this.dataTransferService.currentSubject
      .subscribe(catalog => {
        let bundleKeys = Object.keys(catalog[0].bundles[0].items[0]);
        for (const key of bundleKeys) {
          newItem[key] = key === 'id' ? UUID.UUID() : '';
        }
        catalog[this.categoryIndex].bundles[this.bundleIndex].items.push(newItem);
      });
  }
}
