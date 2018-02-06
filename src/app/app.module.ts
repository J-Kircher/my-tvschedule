import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowsService } from './service/shows.service';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { StorageService } from './shared/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  providers: [
    ShowsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
