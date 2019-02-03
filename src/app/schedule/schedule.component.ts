import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowsService } from '../service/shows.service';
import { StorageService } from '../service/storage.service';
import { ISchedule, IShow, ITimeSlot } from '../model/shows.model';
// import { SimpleModalComponent } from '../common/simple-modal.component';
import { ShowStatsDialogComponent } from '../dialog/show-stats-dialog/show-stats-dialog.component';

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
  // @ViewChild('childModal') childModal: SimpleModalComponent;

  dialogReturn: any;

  constructor(
    private showsService: ShowsService,
    private storageService: StorageService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.schedule = this.showsService.getSchedule();
    this.timeSlots = this.storageService.loadLocalStorage();

    // Cleanup SBS
    // console.log('Resetting SBS to 0');
    // this.timeSlots[this.getTSIdx('SBS')].shows = [];
    // this.storageService.storeLocalStorage(this.timeSlots);

    // Check for changes to SHOWS
    this.checkShows();
    this.sortShowsBetweenSeasons();
  }

  checkShows(): void {
    this.shows = this.showsService.getShows();

    // Add new shows to SBS (Shows Between Seasons)
    this.shows.forEach(s => {
      if (!this.findShowInSavedTimeSlots(s.name)) {
        console.log('[schedule] checkShows() Adding: ' + s.name);
        this.timeSlots[this.showsService.getTimeSlotIndex('SBS')].shows.push(s);
      }
    });

    // Update changed shows and remove deleted shows from timeSlot
    this.timeSlots.forEach(slot => {
      slot.shows.forEach(show => {
        // console.log('[schedule] checkShows() show: ' + show.name + ' findShow(): ' + this.showsService.findShow(show.name));
        if (this.showsService.findShow(show.name)) {
          const savedShow = this.showsService.getShow(show.name);
          if (!this.showsAreEqual(savedShow, show)) {
            console.log('[schedule] checkShows() Updating: ' + show.name);
            this.copyShow(savedShow, show);
          }
        } else {
          console.log('[schedule] checkShows() Removing: ' + show.name);
          this.removeItem(show, this.timeSlots[this.getTSIdx(slot.name)].shows);
        }
      });
    });

    // Update local storage
    this.storageService.storeLocalStorage(this.timeSlots);
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

        if (slotName === 'SBS' || fromSlot === 'SBS') {
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

  showsAreEqual(s1: IShow, s2: IShow): boolean {
    if ( (s1.network !== s2.network)
      || (s1.link !== s2.link)
      || (s1.image !== s2.image)
      || (s1.info !== s2.info)
      || (s1.start !== s2.start) ) {
      return false;
    } else {
      return true;
    }
  }

  copyShow(source: IShow, dest: IShow): void {
    dest.network = source.network;
    dest.link = source.link;
    dest.image = source.image;
    dest.info = source.info;
    dest.start = source.start;
  }


  findShowInSavedTimeSlots(showName): boolean {
    let found = false;
    let storedTimeSlots: ITimeSlot[] = [];

    const storedConfigText = localStorage.getItem('timeSlots');
    if (storedConfigText) {
      storedTimeSlots = JSON.parse(storedConfigText);
    }

    storedTimeSlots.forEach(slot => {
      slot.shows.forEach(show => {
        if (show.name === showName) {
          found = true;
        }
      });
    });

    return found;
  }

  sortShowsBetweenSeasons() {
    // console.log('[schedule] sortShowsBetweenSeasons()');

    // Remove blank rows
    let blankIdx = this.timeSlots[this.getTSIdx('SBS')].shows.findIndex(s => s.name === '');
    while (blankIdx > -1) {
      this.removeItem(this.timeSlots[this.getTSIdx('SBS')].shows[blankIdx], this.timeSlots[this.getTSIdx('SBS')].shows);
      blankIdx = this.timeSlots[this.getTSIdx('SBS')].shows.findIndex(s => s.name === '');
    }

    // Sort SBS shows by start date
    this.timeSlots[this.getTSIdx('SBS')].shows.sort(sortShowByDate);

    // Rearrange Shows Between Seasons
    // Find show that started this week
    const idxStarted = this.timeSlots[this.getTSIdx('SBS')].shows.findIndex(findThisPastWeek);
    // Find first show after today
    const idxSoon = this.timeSlots[this.getTSIdx('SBS')].shows.findIndex(findAfterToday);

    // Split the array into shows that have not started yet and shows that are over
    let arrEndedShows, arrStartedShows, arrSoonShows;
    if (idxStarted > -1) {
      arrEndedShows = this.timeSlots[this.getTSIdx('SBS')].shows.slice(0, idxStarted);
      arrStartedShows = this.timeSlots[this.getTSIdx('SBS')].shows.slice(idxStarted, idxSoon);
      arrSoonShows = this.timeSlots[this.getTSIdx('SBS')].shows.slice(idxSoon);
    } else {
      arrStartedShows = [];
      arrEndedShows = this.timeSlots[this.getTSIdx('SBS')].shows.slice(0, idxSoon);
      arrSoonShows = this.timeSlots[this.getTSIdx('SBS')].shows.slice(idxSoon);
    }

    // Add spacer to start for 'Started this week'
    const startedHeadingArr: IShow[] = [];
    startedHeadingArr.push({ name: '', network: '', link: '', image: '', info: 'Season started this week', start: '', slot: 'SBS' });

    // Add spacer to start for 'Starting soon'
    const soonHeadingArr: IShow[] = [];
    soonHeadingArr.push({ name: '', network: '', link: '', image: '', info: 'Season starting soon', start: '', slot: 'SBS' });

    // Add spacer to middle for 'Recently ended'
    const endedHeadingArr: IShow[] = [];
    endedHeadingArr.push({ name: '', network: '', link: '', image: '', info: 'Season recently ended', start: '', slot: 'SBS' });

    // Combine the parts so that the first item is the next show to start
    if (arrStartedShows.length > 0) {
      this.timeSlots[this.getTSIdx('SBS')].shows = startedHeadingArr
        .concat(arrStartedShows)
        .concat(soonHeadingArr)
        .concat(arrSoonShows)
        .concat(endedHeadingArr)
        .concat(arrEndedShows);
    } else {
      this.timeSlots[this.getTSIdx('SBS')].shows = soonHeadingArr
        .concat(arrSoonShows)
        .concat(endedHeadingArr)
        .concat(arrEndedShows);
    }
  }

  getTS(name): ITimeSlot {
    return this.showsService.getTimeSlot(name);
  }

  getTSIdx(name): number {
    return this.showsService.getTimeSlotIndex(name);
  }

  openStatsDialog(): void {
    const dialogRef = this.dialog.open(ShowStatsDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.dialogReturn = result;
    });
  }

  openStats() {
    // this.childModal.show();
    this.openStatsDialog();
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

function findThisPastWeek(element) {
  const startDate = new Date(element.start);
  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  return (lastWeek < startDate) && (startDate < today);
}
