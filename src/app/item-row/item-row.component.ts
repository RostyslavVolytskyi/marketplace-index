import {Component, Input, OnInit} from '@angular/core';
import {DataTransferService} from "../services/data-transfer.service";

@Component({
  selector: 'item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent implements OnInit {

  @Input() item: any;
  @Input() bundleIndex: number;
  @Input() categoryIndex: number;
  @Input() itemIndex: number;

  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {
  }

  deleteItem(index: number) {
    this.dataTransferService.currentSubject
      .subscribe(catalog => {
        catalog[this.categoryIndex].bundles[this.bundleIndex].items.splice(index, 1);
      })
  }

}
