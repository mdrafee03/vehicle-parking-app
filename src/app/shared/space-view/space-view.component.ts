import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Space } from 'src/app/space/space.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-space-view',
  templateUrl: './space-view.component.html',
  styleUrls: ['./space-view.component.scss']
})
export class SpaceViewComponent implements OnInit, OnChanges {
  @Input() data: Space[];
  @Output() itemClicked = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  clicked(item) {
    if (item.availability === true) {
      this.itemClicked.emit([item.id, 'exist']);
    } else {
      this.itemClicked.emit([item.id, 'notExist'])
    }
  }
}
