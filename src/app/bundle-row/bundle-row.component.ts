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
    this.dataTransferService.currentSubject
      .subscribe(catalog => {
        catalog[this.categoryIndex].bundles.splice(index, 1);
      })
  }

  addItem() {
    let newItem = {};
    this.dataTransferService.currentSubject
      .subscribe(catalog => {
        let itemKeys = ['description', 'id', 'technicalDescriptionUrl', 'name'];
        for (const key of itemKeys) {
          newItem[key] = key === 'id' ? UUID.UUID() : '';
        }

        if(catalog[this.categoryIndex].bundles[this.bundleIndex].items) {
          catalog[this.categoryIndex].bundles[this.bundleIndex].items.push(newItem);
        } else {
          let items = catalog[this.categoryIndex].bundles[this.bundleIndex].items = [];
          items.push(newItem);
        }
      });
  }
}
