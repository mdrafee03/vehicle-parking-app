import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Space } from './space.model';
import { concat, forkJoin } from 'rxjs';
import { Book } from '../book/book.model';
import { MatDialog } from '@angular/material/dialog';
import { SpaceDialogComponent } from './space-dialog/space-dialog.component';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  space: Space[];
  book: Book[];
  total_space: number;
  disableAdd: boolean;
  accSpace: number;
  constructor(
    private service: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.service.getInfo();
    this.service.space.subscribe(res => {
      this.space = res;
      this.accSpace = this.space.reduce((acc, res) => acc + res.space_amount, 0);
    });
  }
  addSpace() {
    const dialogRef = this.dialog.open(SpaceDialogComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.service.addSpace(result).subscribe(res => this.space.push(res));
    });
  }

}
