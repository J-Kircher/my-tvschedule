import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowsService } from './service/shows.service';
import { ShowComponent } from './show/show.component';
import { StorageService } from './service/storage.service';
// import { SimpleModalComponent } from './common/simple-modal.component';
import { ChartComponent } from './chart/chart.component';
import { CapitalizePipe } from './common/capitalize.pipe';
import { ShowStatsDialogComponent } from './dialog/show-stats-dialog/show-stats-dialog.component';
export declare var Chart: any;

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MaterialModule
  ],
  entryComponents: [
    ShowStatsDialogComponent
  ],
  declarations: [
    AppComponent,
    ScheduleComponent,
    ShowComponent,
    // SimpleModalComponent,
    ChartComponent,
    CapitalizePipe,
    ShowStatsDialogComponent
  ],
  providers: [
    ShowsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
