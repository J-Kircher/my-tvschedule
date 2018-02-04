import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ShowsService } from '../service/shows.service';
import { IShow } from '../model/shows.model';

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  private postseason = false;
  private shows: IShow[];

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.shows = this.showsService.getShows();
    // console.table(this.shows);
  }
}
