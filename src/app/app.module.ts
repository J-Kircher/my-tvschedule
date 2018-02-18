import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowsService } from './service/shows.service';
import { ShowComponent } from './show/show.component';
import { StorageService } from './service/storage.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ChartComponent } from './chart/chart.component';
export declare var Chart: any;

@NgModule({
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ScheduleComponent,
    ShowComponent,
    SimpleModalComponent,
    ChartComponent
  ],
  providers: [
    ShowsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
