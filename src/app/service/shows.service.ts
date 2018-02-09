import { Injectable } from '@angular/core';
import { ISchedule, IShow, ITimeSlot } from '../model/shows.model';

const SCHEDULE: ISchedule[] = [
  { 'name': 'Sunday', 'time': [ { 'slot': 'S8' }, { 'slot': 'S9' }, { 'slot': 'SX' } ] },
  { 'name': 'Monday', 'time': [ { 'slot': 'M8' }, { 'slot': 'M9' }, { 'slot': 'MX' } ] },
  { 'name': 'Tuesday', 'time': [ { 'slot': 'T8' }, { 'slot': 'T9' }, { 'slot': 'TX' } ] },
  { 'name': 'Wednesday', 'time': [ { 'slot': 'W8' }, { 'slot': 'W9' }, { 'slot': 'WX' } ] },
  { 'name': 'Thursday', 'time': [ { 'slot': 'R8' }, { 'slot': 'R9' }, { 'slot': 'RX' } ] },
  { 'name': 'Friday', 'time': [ { 'slot': 'F8' }, { 'slot': 'F9' }, { 'slot': 'FX' } ] },
  { 'name': 'Saturday', 'time': [ { 'slot': 'A8' }, { 'slot': 'A9' }, { 'slot': 'AX' } ] },
  { 'name': 'Streaming', 'time': [ { 'slot': 'N8' }, { 'slot': 'N9' }, { 'slot': 'NX' } ] }
];

const SHOWS: IShow[] = [
  { 'name': 'Gotham', 'network': 'FOX', 'link': 'http://www.fox.com/gotham/', 'image': 'Gotham2', 'info': 'Thursdays 8:00PM', 'start': 'September 21, 2017', 'slot': 'SBS' },
  { 'name': 'Big Bang Theory', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/big_bang_theory/', 'image': 'BigBangTheory', 'info': 'Thursdays 8:00PM', 'start': 'September 25, 2017', 'slot': 'SBS' },
  { 'name': 'Criminal Minds', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/criminal_minds/', 'image': 'CriminalMinds', 'info': 'Wednesdays 10:00PM', 'start': 'September 27, 2017', 'slot': 'SBS' },
  { 'name': 'Supergirl', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supergirl/', 'image': 'Supergirl', 'info': 'Mondays 8:00PM', 'start': 'October 9, 2017', 'slot': 'SBS' },
  { 'name': 'The Flash', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/the-flash/', 'image': 'TheFlash', 'info': 'Tuesdays 8:00PM', 'start': 'October 10, 2017', 'slot': 'SBS' },
  { 'name': 'Legends of Tomorrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/dcs-legends-of-tomorrow/', 'image': 'LegendsOfTomorrow', 'info': 'Tuesdays 9:00PM', 'start': 'October 10, 2017', 'slot': 'SBS' },
  { 'name': 'Supernatural', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supernatural/', 'image': 'Supernatural13', 'info': 'Thursdays 8:00PM', 'start': 'October 12, 2017', 'slot': 'SBS' },
  { 'name': 'Arrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/arrow/', 'image': 'Arrow', 'info': 'Thursdays 9:00PM', 'start': 'October 12, 2017', 'slot': 'SBS' },
  { 'name': 'Star Wars Rebels', 'network': 'DisneyXD', 'link': 'http://www.starwars.com/tv-shows/star-wars-rebels', 'image': 'Rebels', 'info': 'Mondays 9:00PM', 'start': 'October 16, 2017', 'slot': 'SBS' },
  { 'name': 'The Walking Dead', 'network': 'AMC', 'link': 'http://www.amctv.com/series/The-Walking-Dead/', 'image': 'WalkingDead', 'info': 'Sundays 9:00PM', 'start': 'October 22, 2017', 'slot': 'SBS' },
  { 'name': 'The Punisher', 'network': 'Netflix', 'link': 'http://www.netflix.com/punisher', 'image': 'Punisher', 'info': 'Streaming', 'start': 'November 17, 2017', 'slot': 'SBS' },
  { 'name': 'Vikings', 'network': 'History', 'link': 'http://www.history.com/shows/vikings', 'image': 'Vikings', 'info': 'Wednesdays 9:00PM', 'start': 'November 29, 2017', 'slot': 'SBS' },
  { 'name': 'The X-Files', 'network': 'FOX', 'link': 'http://www.fox.com/the-x-files/', 'image': 'XFiles2016', 'info': 'Wednesdays 8:00PM', 'start': 'January 3, 2018', 'slot': 'SBS' },
  { 'name': 'Homeland', 'network': 'Showtime', 'link': 'http://www.sho.com/sho/homeland/home', 'image': 'Homeland', 'info': 'Sundays 9:00PM', 'start': 'February 11, 2018', 'slot': 'SBS' },
  { 'name': 'Last Week Tonight', 'network': 'HBO', 'link': 'http://www.hbo.com/last-week-tonight-with-john-oliver/', 'image': 'LastWeekTonight2', 'info': 'Sundays 11:00PM', 'start': 'February 18, 2018', 'slot': 'SBS' },
  { 'name': 'Ash vs Evil Dead', 'network': 'Starz', 'link': 'https://www.starz.com/series/ashvsevildead', 'image': 'AshVsEvilDead', 'info': 'Sundays 9:00PM', 'start': 'February 25, 2018', 'slot': 'SBS' },
  { 'name': 'Survivor', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/survivor/', 'image': 'Survivor', 'info': 'Wednesdays 8:00PM', 'start': 'February 28, 2018', 'slot': 'SBS' },
  { 'name': 'Jessica Jones', 'network': 'Netflix', 'link': 'http://www.netflix.com/jessicajones', 'image': 'JessicaJones', 'info': 'Streaming', 'start': 'March 8, 2018', 'slot': 'SBS' },
  { 'name': 'Krypton', 'network': 'Syfy', 'link': 'http://www.syfy.com/krypton/', 'image': 'Krypton', 'info': 'Wednesdays', 'start': 'March 21, 2018', 'slot': 'SBS' },
  { 'name': 'Silicon Valley', 'network': 'HBO', 'link': 'http://www.hbo.com/silicon-valley/', 'image': 'SiliconValley', 'info': 'Sundays 10:00PM', 'start': 'March 25, 2018', 'slot': 'SBS' },
  { 'name': 'A Series of Unfortunate Events', 'network': 'Netflix', 'link': 'http://www.netflix.com/unfortunate', 'image': 'Unfortunate', 'info': 'Streaming', 'start': 'March 30, 2018', 'slot': 'SBS' },
  { 'name': 'Westworld', 'network': 'HBO', 'link': 'http://www.hbo.com/westworld/', 'image': 'Westworld', 'info': 'Sundays 9:00PM', 'start': 'April 22, 2018', 'slot': 'SBS' },
  { 'name': 'The Handmaids Tale', 'network': 'Hulu', 'link': 'http://www.hulu.com/the-handmaids-tale/', 'image': 'HandmaidsTale', 'info': 'Streaming', 'start': 'April 25, 2018', 'slot': 'SBS' },
  { 'name': 'Elementary', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/elementary/', 'image': 'Elementary', 'info': 'Mondays 10:00PM', 'start': 'April 30, 2018', 'slot': 'SBS' },
  { 'name': 'True Detective', 'network': 'HBO', 'link': 'http://www.hbo.com/true-detective/', 'image': 'TrueDetective', 'info': 'Sundays 9:00PM', 'start': 'June 21, 2017', 'slot': 'SBS' },
  { 'name': 'Daredevil', 'network': 'Netflix', 'link': 'http://www.netflix.com/daredevil', 'image': 'Daredevil2', 'info': 'Streaming', 'start': 'March 18, 2017', 'slot': 'SBS' },
  { 'name': 'Fugget About It', 'network': 'Hulu', 'link': 'http://www.hulu.com/fugget-about-it/', 'image': 'FuggetAboutIt', 'info': 'Streaming', 'start': 'October 28, 2017', 'slot': 'SBS' },
  { 'name': 'Luke Cage', 'network': 'Netflix', 'link': 'http://www.netflix.com/lukecage', 'image': 'LukeCage', 'info': 'Streaming', 'start': 'September 30, 2017', 'slot': 'SBS' },
  { 'name': 'Taboo', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/taboo/', 'image': 'Taboo', 'info': 'Tuesdays 10:00PM', 'start': 'January 10, 2017', 'slot': 'SBS' },
  { 'name': 'The Expanse', 'network': 'Syfy', 'link': 'http://www.syfy.com/expanse/', 'image': 'Expanse', 'info': 'Fridays', 'start': 'March 1, 2017', 'slot': 'SBS' },
  { 'name': 'Iron Fist', 'network': 'Netflix', 'link': 'http://www.netflix.com/ironfist', 'image': 'IronFist', 'info': 'Streaming', 'start': 'March 17, 2017', 'slot': 'SBS' },
  { 'name': 'Archer', 'network': 'FXX', 'link': 'http://www.fxnetworks.com/shows/archer/', 'image': 'Archer', 'info': 'Wednesday 10:00PM', 'start': 'April 5, 2017', 'slot': 'SBS' },
  { 'name': 'American Gods', 'network': 'Starz', 'link': 'http://www.starz.com/americangods/', 'image': 'AmericanGods', 'info': 'Sundays 9:00PM', 'start': 'April 30, 2017', 'slot': 'SBS' },
  { 'name': 'Better Call Saul', 'network': 'AMC', 'link': 'http://www.amctv.com/shows/better-call-saul/', 'image': 'BetterCallSaul', 'info': 'Mondays 10:00PM', 'start': 'April 10, 2017', 'slot': 'SBS' },
  { 'name': 'House of Cards', 'network': 'Netflix', 'link': 'http://www.netflix.com/houseofcards', 'image': 'HouseOfCards', 'info': 'Streaming', 'start': 'May 30, 2017', 'slot': 'SBS' },
  { 'name': 'F is for Family', 'network': 'Netflix', 'link': 'http://www.netflix.com/fisforfamily', 'image': 'FIsForFamily', 'info': 'Streaming', 'start': 'May 30, 2017', 'slot': 'SBS' },
  { 'name': 'Orange is the New Black', 'network': 'Netflix', 'link': 'http://www.netflix.com/orangeisthenewblack', 'image': 'OrangeIsTheNewBlack', 'info': 'Streaming', 'start': 'June 9, 2017', 'slot': 'SBS' },
  { 'name': 'Doctor Who', 'network': 'BBC', 'link': 'http://www.bbcamerica.com/doctor-who/', 'image': 'DoctorWho', 'info': 'Saturdays 9:00PM', 'start': 'April 15, 2017', 'slot': 'SBS' },
  { 'name': 'The Defenders', 'network': 'Netflix', 'link': 'http://www.netflix.com/defenders', 'image': 'Defenders', 'info': 'Streaming', 'start': 'August 18, 2017', 'slot': 'SBS' },
  { 'name': 'Game of Thrones', 'network': 'HBO', 'link': 'http://www.hbo.com/game-of-thrones/', 'image': 'GameOfThrones', 'info': 'Sundays 9:00PM', 'start': 'July 16, 2017', 'slot': 'SBS' },
  { 'name': 'Rick and Morty', 'network': 'AS', 'link': 'http://www.adultswim.com/RickAndMorty', 'image': 'RickAndMorty', 'info': 'Sundays', 'start': 'July 30, 2017', 'slot': 'SBS' },
  { 'name': 'Narcos', 'network': 'Netflix', 'link': 'http://www.netflix.com/narcos', 'image': 'Narcos', 'info': 'Streaming', 'start': 'September 1, 2017', 'slot': 'SBS' },
  { 'name': 'Stranger Things', 'network': 'Netflix', 'link': 'http://www.netflix.com/strangerthings', 'image': 'StrangerThings', 'info': 'Streaming', 'start': 'October 31, 2017', 'slot': 'SBS' },
  { 'name': 'Real Housewives of Orange County', 'network': 'Bravo', 'link': 'http://www.bravotv.com/the-real-housewives-of-orange-county', 'image': 'RealHousewivesOrangeCounty', 'info': 'Mondays 9:00PM', 'start': 'July 10, 2017', 'slot': 'SBS' },
  { 'name': 'American Horror Story', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/american-horror-story/', 'image': 'AmericanHorrorStory', 'info': 'Tuesdays 10:00PM', 'start': 'September 5, 2017', 'slot': 'SBS' },
  { 'name': 'The Orville', 'network': 'FOX', 'link': 'http://www.fox.com/the-orville/', 'image': 'Orville', 'info': 'Thursdays 9:00PM', 'start': 'September 10, 2017', 'slot': 'SBS' },
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

  getSchedule(): ISchedule[] {
    return SCHEDULE;
  }

  getShows(): IShow[] {
    return SHOWS;
  }

  getShow(name: string): IShow {
    return SHOWS.find(s => s.name === name);
  }

  findShow(showName: string): boolean {
    let found = false;
    SHOWS.forEach(show => {
      if (show.name === showName) {
        found = true;
      }
    });
    return found;
  }

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
