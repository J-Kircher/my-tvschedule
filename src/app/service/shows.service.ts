import { Injectable } from '@angular/core';
import { IShow, ITimeSlot } from '../model/shows.model';

const SHOWS: IShow[] = [
  { 'name': 'Gotham', 'network': 'FOX', 'link': 'http://www.fox.com/gotham/', 'image': 'Gotham2.gif', 'info': 'Thursdays 8:00PM (Thursday, September 21)', 'status': 'B' },
  { 'name': 'Big Bang Theory', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/big_bang_theory/', 'image': 'BigBangTheory.gif', 'info': 'Thursdays 8:00PM (Monday, September 25)', 'status': 'B' },
  { 'name': 'Criminal Minds', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/criminal_minds/', 'image': 'CriminalMinds.gif', 'info': 'Wednesdays 10:00PM (Wednesday, September 27)', 'status': 'B' },
  { 'name': 'Supergirl', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supergirl/', 'image': 'Supergirl.gif', 'info': 'Mondays 8:00PM (Monday, October 9)', 'status': 'B' },
  { 'name': 'The Flash', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/the-flash/', 'image': 'TheFlash.gif', 'info': 'Tuesdays 8:00PM (Tuesday, October 10)', 'status': 'B' },
  { 'name': 'Legends of Tomorrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/dcs-legends-of-tomorrow/', 'image': 'LegendsOfTomorrow.gif', 'info': 'Tuesdays 9:00PM (Tuesday, October 10)', 'status': 'B' },
  { 'name': 'Supernatural', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supernatural/', 'image': 'Supernatural11.gif', 'info': 'Thursdays 8:00PM (Thursday, October 12)', 'status': 'B' },
  { 'name': 'Arrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/arrow/', 'image': 'Arrow.gif', 'info': 'Thursdays 9:00PM (Thursday, October 12)', 'status': 'B' },
  { 'name': 'Star Wars Rebels', 'network': 'DisneyXD', 'link': 'http://www.starwars.com/tv-shows/star-wars-rebels', 'image': 'Rebels.gif', 'info': 'Mondays 9:00PM (Monday, October 16)', 'status': 'B' },
  { 'name': 'The Walking Dead', 'network': 'AMC', 'link': 'http://www.amctv.com/series/The-Walking-Dead/', 'image': 'WalkingDead.gif', 'info': 'Sundays 9:00PM (Sunday, October 22)', 'status': 'B' },
  { 'name': 'The Punisher', 'network': 'Netflix', 'link': 'http://www.netflix.com/punisher', 'image': 'Punisher.gif', 'info': 'Streaming (November 17)', 'status': 'B' },
  { 'name': 'Vikings', 'network': 'History', 'link': 'http://www.history.com/shows/vikings', 'image': 'Vikings.gif', 'info': 'Wednesdays 9:00PM (Wednesday, November 29)', 'status': 'B' },
  { 'name': 'The X-Files', 'network': 'FOX', 'link': 'http://www.fox.com/the-x-files/', 'image': 'XFiles2016.gif', 'info': 'Wednesdays 8:00PM (Wednesday, January 3)', 'status': 'B' },
  { 'name': 'Homeland', 'network': 'Showtime', 'link': 'http://www.sho.com/sho/homeland/home', 'image': 'Homeland.gif', 'info': 'Sundays 9:00PM (Sunday, February 11)', 'status': 'B' },
  { 'name': 'Ash vs Evil Dead', 'network': 'Starz', 'link': 'https://www.starz.com/series/ashvsevildead', 'image': 'AshVsEvilDead.gif', 'info': 'Sundays 9:00PM (Sunday, February 25)', 'status': 'B' },
  { 'name': 'Jessica Jones', 'network': 'Netflix', 'link': 'http://www.netflix.com/jessicajones', 'image': 'JessicaJones.gif', 'info': 'Streaming (March 8)', 'status': 'B' },
  { 'name': 'Krypton', 'network': 'Syfy', 'link': 'http://www.syfy.com/krypton/', 'image': 'Krypton.gif', 'info': 'Wednesdays (Wednesday, March 21)', 'status': 'B' },
  { 'name': 'A Series of Unfortunate Events', 'network': 'Netflix', 'link': 'http://www.netflix.com/unfortunate', 'image': 'Unfortunate.gif', 'info': 'Streaming (March 30)', 'status': 'B' },
  { 'name': 'Elementary', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/elementary/', 'image': 'Elementary.gif', 'info': 'Mondays 10:00PM (Monday, April 30)', 'status': 'B' }
];

const TIMESLOTS: ITimeSlot[] = [
  { 'name': 'S8', 'shows': [] },
  { 'name': 'S9', 'shows': [] },
  { 'name': 'SX', 'shows': [] },
  { 'name': 'M8', 'shows': [] },
  { 'name': 'M9', 'shows': [] },
  { 'name': 'MX', 'shows': [] },
  { 'name': 'T8', 'shows': [] },
  { 'name': 'T9', 'shows': [] },
  { 'name': 'TX', 'shows': [] },
  { 'name': 'W8', 'shows': [] },
  { 'name': 'W9', 'shows': [] },
  { 'name': 'WX', 'shows': [] },
  { 'name': 'R8', 'shows': [] },
  { 'name': 'R9', 'shows': [] },
  { 'name': 'RX', 'shows': [] },
  { 'name': 'F8', 'shows': [] },
  { 'name': 'F9', 'shows': [] },
  { 'name': 'FX', 'shows': [] },
  { 'name': 'A8', 'shows': [] },
  { 'name': 'A9', 'shows': [] },
  { 'name': 'AX', 'shows': [] },
  { 'name': 'N8', 'shows': [] },
  { 'name': 'N9', 'shows': [] },
  { 'name': 'NX', 'shows': [] },
  { 'name': 'SBS', 'shows': SHOWS }
];

@Injectable()
export class ShowsService {

  getShows(): IShow[] {
    return SHOWS;
  }

  getShow(name: string): IShow {
    return SHOWS.find(s => s.name === name);
  }

  // getShowIndex(name: string): number {
  //   let counter = 0;
  //   let index = -1;
  //   SHOWS.forEach(s => {
  //     if (s.name === name) {
  //       index = counter;
  //     } else {
  //       counter++;
  //     }
  //   });
  //   return index;
  // }

  // getShowByIndex(index: number): IShow {
  //   return SHOWS[index];
  // }

  getTimeSlots(): ITimeSlot[] {
    return TIMESLOTS;
  }

  getTimeSlot(name: string): ITimeSlot {
    return TIMESLOTS.find(s => s.name === name);
  }

  getTimeSlotIndex(name: string): number {
    let counter = 0;
    let index = -1;
    TIMESLOTS.forEach(s => {
      if (s.name === name) {
        index = counter;
      } else {
        counter++;
      }
    });
    return index;
  }

  getTimeSlotByIndex(index: number): ITimeSlot {
    return TIMESLOTS[index];
  }

  findShowInTimeSlots(showName): boolean {
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
}
