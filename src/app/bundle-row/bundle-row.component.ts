import {Component, Input, OnInit} from '@angular/core';
import {DataTransferService} from "../services/data-transfer.service";

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
    console.log()
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

}
