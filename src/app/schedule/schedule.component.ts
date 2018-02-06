import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ShowsService } from '../service/shows.service';
import { StorageService } from '../shared/storage.service';
import { IShow, ITimeSlot } from '../model/shows.model';

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  private postseason = false;
  private timeSlots: ITimeSlot[] = [];

  constructor(private showsService: ShowsService, private storageService: StorageService) { }

  ngOnInit() {
    // console.table(this.shows);
    this.timeSlots = this.storageService.loadLocalStorage();
  }

  onAnyDrop(e: any, slotName: string) {
    // const slotName = e.nativeEvent.srcElement.id;
    // console.log('[schedule] onAnyDrop() slotName: [' + slotName + ']');
    if (slotName !== '') {
      this.timeSlots[this.getTSIdx(slotName)].shows.push(e.dragData);
      this.timeSlots[this.getTSIdx(slotName)].shows.sort(sortShow);
      this.removeItem(e.dragData, this.timeSlots[this.getTSIdx('SBS')].shows);
      this.storageService.storeLocalStorage(this.timeSlots);
    } else {
      console.log('[schedule] onAnyDrop() slotName is BAD');
      console.log(e);
    }
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  getTS(name): ITimeSlot {
    return this.showsService.getTimeSlot(name);
  }

  getTSIdx(name): number {
    return this.showsService.getTimeSlotIndex(name);
  }
}

function sortShow(s1, s2) {
  if (s1.name < s2.name) {
    return -1;
  } else {
    if (s1.name > s2.name) {
      return 1;
    } else {
      return 0;
    }
  }
}
