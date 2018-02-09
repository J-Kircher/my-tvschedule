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
    this.sortShowsBetweenSeasons();
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
        // console.log('[schedule] checkShows() show: ' + show.name + ' findShow(): ' + this.showsService.findShow(show.name));
        if (!this.showsService.findShow(show.name)) {
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
    // console.log('[schedule] onAnyDrop() target: [' + e.nativeEvent.target.id + ']');
    // console.log(e);
    if (slotName !== '') {
      if (slotName !== fromSlot) {
        e.dragData.slot = slotName;
        this.timeSlots[this.getTSIdx(slotName)].shows.push(e.dragData);
        this.timeSlots[this.getTSIdx(slotName)].shows.sort(sortShowByName);

        this.removeItem(e.dragData, this.timeSlots[this.getTSIdx(fromSlot)].shows);
        this.storageService.storeLocalStorage(this.timeSlots);
        console.log('Moving [' + e.dragData.name + '] from ' + fromSlot + ' to ' + slotName);

        if (slotName === 'SBS') {
          this.sortShowsBetweenSeasons();
        }
      } else {
        console.warn('NOT Moving [' + e.dragData.name + '], same slot');
      }
    } else {
      console.error('NOT moving [' + e.dragData.name + '], slotName is BAD');
      console.error(e);
    }
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  sortShowsBetweenSeasons() {
    console.log('sortShowsBetweenSeasons');

    // Remove blank rows
    let blankIdx = this.timeSlots[this.getTSIdx('SBS')].shows.findIndex(s => s.name === '');
    while (blankIdx > -1) {
      this.removeItem(this.timeSlots[this.getTSIdx('SBS')].shows[blankIdx], this.timeSlots[this.getTSIdx('SBS')].shows)
      blankIdx = this.timeSlots[this.getTSIdx('SBS')].shows.findIndex(s => s.name === '');
    }

    // Sort SBS shows by start date
    this.timeSlots[this.getTSIdx('SBS')].shows.sort(sortShowByDate);

    // Rearrange Shows Between Seasons
    // Find first show after today
    const idx = this.timeSlots[this.getTSIdx('SBS')].shows.findIndex(findAfterToday);

    // Split the array into shows that have not started yet and shows that are over
    const arr1 = this.timeSlots[this.getTSIdx('SBS')].shows.slice(0, idx);
    const arr2 = this.timeSlots[this.getTSIdx('SBS')].shows.slice(idx);

    // Add spacer to start for 'Starting soon'
    const startArr: IShow[] = [];
    startArr.push({ name: '', network: '', link: '', image: '', info: 'Season starting soon', start: '', slot: 'SBS' });

    // Add spacer to middle for 'Recently ended'
    const midArr: IShow[] = [];
    midArr.push({ name: '', network: '', link: '', image: '', info: 'Season recently ended', start: '', slot: 'SBS' });

    // Combine the two parts so that the first item is the next show to start
    this.timeSlots[this.getTSIdx('SBS')].shows = startArr.concat(arr2).concat(midArr).concat(arr1);
  }

  getTS(name): ITimeSlot {
    return this.showsService.getTimeSlot(name);
  }

  getTSIdx(name): number {
    return this.showsService.getTimeSlotIndex(name);
  }
}

function sortShowByName(s1, s2) {
  if (strip(s1.name) < strip(s2.name)) {
    return -1;
  } else {
    if (strip(s1.name) > strip(s2.name)) {
      return 1;
    } else {
      return 0;
    }
  }
}

function strip(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

function sortShowByDate(s1, s2) {
  const date1 = new Date(s1.start);
  const date2 = new Date(s2.start);
  if (date1 < date2) {
    return -1;
  } else {
    if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  }
}

function findAfterToday(element) {
  const startDate = new Date(element.start);
  const today = new Date();
  return startDate > today;
}
