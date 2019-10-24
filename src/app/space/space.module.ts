import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceComponent } from './space.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor } from '../api-url.interceptor';
import { SpaceMaterial } from './space-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceDialogComponent } from './space-dialog/space-dialog.component';



@NgModule({
  declarations: [SpaceComponent, SpaceDialogComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    SharedModule,
    SpaceMaterial,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true }
  ],
  entryComponents: [
    SpaceDialogComponent
  ]
})
export class SpaceModule { }
