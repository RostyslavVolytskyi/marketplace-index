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
        let bundleKeys = ['description', 'id', 'vinSensitive', 'name'];
        for (const key of bundleKeys) {
          newBundle[key] = key === 'id' ? UUID.UUID() : '';
        }

        // can be simply catalog[this.categoryIndex].bundles.push(newBundle), for now keep it like this
        if(catalog[this.categoryIndex].bundles) {
          catalog[this.categoryIndex].bundles.push(newBundle);
        } else {
          let bundles = catalog[this.categoryIndex].bundles = [];
          bundles.push(newBundle);
        }
      });
  }
}
