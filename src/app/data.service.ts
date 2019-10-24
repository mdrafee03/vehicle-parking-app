import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, Subject } from 'rxjs';
import { Book } from './book/book.model';
import { Space } from './space/space.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  space = new Subject<Space[]>();
  book: Book[];
  constructor(
    private http: HttpClient
  ) { }

  getBookInfo(): Observable<any> {
    return this.http.get<Book>('book');
  }

  getSpaceInfo(): Observable<any> {
    return this.http.get<Space>('space');
  }
  
  getInfo() {
    const spaceInfo$ = forkJoin(this.getSpaceInfo(), this.getBookInfo());
    spaceInfo$.subscribe(res => {
      this.book = res[1];
      this.fillAvailability(res[0]);
    });
  }
  fillAvailability(space) {
    space.map(res => {
      if (this.book.find(f => f.space_id === res.id)) {
        res.availibility = true;
      } else {
        res.availibility = false;
      }
    });
    this.space.next(space);
  }
  addSpace(data): Observable<any> {
    return this.http.post('space', data);
  }
}
