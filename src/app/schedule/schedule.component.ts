import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ShowsService } from '../service/shows.service';
import { StorageService } from '../service/storage.service';
import { ISchedule, IShow, ITimeSlot } from '../model/shows.model';

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  private postseason = false;
  private schedule: ISchedule[] = [];
  private timeSlots: ITimeSlot[] = [];
  private shows: IShow[] = [];

  constructor(private showsService: ShowsService, private storageService: StorageService) { }

  ngOnInit() {
    this.schedule = this.showsService.getSchedule();
    this.timeSlots = this.storageService.loadLocalStorage();

    // Check for changes to SHOWS
    this.checkShows();
  }

  checkShows(): void {
    this.shows = this.showsService.getShows();
    // Add new shows to SBS (Shows Between Seasons)
    this.shows.forEach(s => {
      if (!this.showsService.findShowInTimeSlots(s.name)) {
        console.log('[schedule] checkShows() Adding: ' + s.name);
        this.timeSlots[this.showsService.getTimeSlotIndex('SBS')].shows.push(s);
        this.storageService.storeLocalStorage(this.timeSlots);
      }
    });
    // Remove deleted shows from timeSlot
    this.timeSlots.forEach(slot => {
      slot.shows.forEach(show => {
        if (!this.showsService.getShow(show.name)) {
          console.log('[schedule] checkShows() Removing: ' + show.name);
          this.removeItem(show, this.timeSlots[this.getTSIdx(slot.name)].shows);
          this.storageService.storeLocalStorage(this.timeSlots);
        }
      });
    });
  }

  onAnyDrop(e: any, slotName: string) {
    const fromSlot: string = e.dragData.slot;
    // const slotName = e.nativeEvent.srcElement.id;
    // console.log('[schedule] onAnyDrop() slotName: [' + slotName + ']');
    // console.log('[schedule] onAnyDrop() fromSlot: [' + fromSlot + ']');
    // console.log('[schedule] onAnyDrop() target: [' + e.nativeEvent.target.id + ']');
    // console.log(e);
    if (slotName !== '') {
      if (slotName !== fromSlot) {
        e.dragData.slot = slotName;
        this.timeSlots[this.getTSIdx(slotName)].shows.push(e.dragData);
        this.timeSlots[this.getTSIdx(slotName)].shows.sort(sortShow);
        this.removeItem(e.dragData, this.timeSlots[this.getTSIdx(fromSlot)].shows);
        this.storageService.storeLocalStorage(this.timeSlots);
      }
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
