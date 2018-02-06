import { Injectable } from '@angular/core';
import { IShow, ITimeSlot } from '../model/shows.model';
import { ShowsService } from '../service/shows.service';

@Injectable()
export class StorageService {

  constructor(private showsService: ShowsService) { }

  private getDefaultLocalStorage(): any {
    console.log('[storage.service] getDefaultLocalStorage()');
    return this.showsService.getTimeSlots();
  }

  public loadLocalStorage(): ITimeSlot[] {
    console.log('[storage.service] loadLocalStorage()');
    let config = this.getDefaultLocalStorage();

    try {
      const configText = localStorage.getItem('timeSlots');

      if (configText) {
        config = JSON.parse(configText);
      } else {
        this.storeLocalStorage(config);
      }
    } catch (e) {
      console.warn('[storage.service] loadLocalStorage() Error reading from local storage');
    }
    return config;
  }

  public storeLocalStorage(newTimeSlots: ITimeSlot[]): void {
    console.log('[storage.service] storeLocalStorage()');
    try {
      const configText = JSON.stringify(newTimeSlots);
      localStorage.setItem('timeSlots', configText);
    } catch (e) {
      console.warn('[storage.service] storeLocalStorage() Error reading from local storage');
    }
  }
}
