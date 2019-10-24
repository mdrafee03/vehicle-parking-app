import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceViewComponent } from './space-view/space-view.component';
import { SharedMaterial } from './shared-material';
import { BookMaterial } from '../book/book-material';



@NgModule({
  declarations: [SpaceViewComponent],
  imports: [
    CommonModule,
    SharedMaterial,
    BookMaterial,
  ],
  exports:[
    SpaceViewComponent
  ]
})
export class SharedModule { }
