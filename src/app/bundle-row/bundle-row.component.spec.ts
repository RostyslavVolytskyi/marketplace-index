import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleRowComponent } from './bundle-row.component';

describe('BundleRowComponent', () => {
  let component: BundleRowComponent;
  let fixture: ComponentFixture<BundleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
