import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowsService } from './service/shows.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  providers: [
    ShowsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
