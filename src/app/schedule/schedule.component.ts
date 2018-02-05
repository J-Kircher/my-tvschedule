import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ShowsService } from '../service/shows.service';
import { IShow, ITimeSlot } from '../model/shows.model';

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  private postseason = false;
  private shows: IShow[];
  private timeSlots: ITimeSlot[] = [];

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.shows = this.showsService.getShows();
    // console.table(this.shows);
    this.timeSlots = this.showsService.getTimeSlots();
  }

  onAnyDrop(e: any, slotName: string) {
    // const slotName = e.nativeEvent.srcElement.id;
    console.log('[schedule] onAnyDrop() slotName: [' + slotName + ']');
    if (slotName !== '') {
      this.timeSlots[this.getTSIdx(slotName)].shows.push(e.dragData);

      this.removeItem(e.dragData, this.shows);
      console.table(this.timeSlots);
      console.table(this.timeSlots[this.getTSIdx(slotName)].shows);
    } else {
      console.log('[schedule] onAnyDrop() slotName is BAD');
    }
    console.log(e);
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  getTS(name) {
    return this.showsService.getTimeSlot(name);
  }

  getTSIdx(name) {
    return this.showsService.getTimeSlotIndex(name);
  }
}
