import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from './book.model';
import { Space } from '../space/space.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  space: Space[]
  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getInfo();
    this.service.space.subscribe(res => this.space = res);
  }
  openModal(event) {

  }

}
