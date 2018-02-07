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
  { 'name': 'Gotham', 'network': 'FOX', 'link': 'http://www.fox.com/gotham/', 'image': 'Gotham2.gif', 'info': 'Thursdays 8:00PM (Thursday, September 21)', 'slot': 'SBS' },
  { 'name': 'Big Bang Theory', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/big_bang_theory/', 'image': 'BigBangTheory.gif', 'info': 'Thursdays 8:00PM (Monday, September 25)', 'slot': 'SBS' },
  { 'name': 'Criminal Minds', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/criminal_minds/', 'image': 'CriminalMinds.gif', 'info': 'Wednesdays 10:00PM (Wednesday, September 27)', 'slot': 'SBS' },
  { 'name': 'Supergirl', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supergirl/', 'image': 'Supergirl.gif', 'info': 'Mondays 8:00PM (Monday, October 9)', 'slot': 'SBS' },
  { 'name': 'The Flash', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/the-flash/', 'image': 'TheFlash.gif', 'info': 'Tuesdays 8:00PM (Tuesday, October 10)', 'slot': 'SBS' },
  { 'name': 'Legends of Tomorrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/dcs-legends-of-tomorrow/', 'image': 'LegendsOfTomorrow.gif', 'info': 'Tuesdays 9:00PM (Tuesday, October 10)', 'slot': 'SBS' },
  { 'name': 'Supernatural', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supernatural/', 'image': 'Supernatural11.gif', 'info': 'Thursdays 8:00PM (Thursday, October 12)', 'slot': 'SBS' },
  { 'name': 'Arrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/arrow/', 'image': 'Arrow.gif', 'info': 'Thursdays 9:00PM (Thursday, October 12)', 'slot': 'SBS' },
  { 'name': 'Star Wars Rebels', 'network': 'DisneyXD', 'link': 'http://www.starwars.com/tv-shows/star-wars-rebels', 'image': 'Rebels.gif', 'info': 'Mondays 9:00PM (Monday, October 16)', 'slot': 'SBS' },
  { 'name': 'The Walking Dead', 'network': 'AMC', 'link': 'http://www.amctv.com/series/The-Walking-Dead/', 'image': 'WalkingDead.gif', 'info': 'Sundays 9:00PM (Sunday, October 22)', 'slot': 'SBS' },
  { 'name': 'The Punisher', 'network': 'Netflix', 'link': 'http://www.netflix.com/punisher', 'image': 'Punisher.gif', 'info': 'Streaming (November 17)', 'slot': 'SBS' },
  { 'name': 'Vikings', 'network': 'History', 'link': 'http://www.history.com/shows/vikings', 'image': 'Vikings.gif', 'info': 'Wednesdays 9:00PM (Wednesday, November 29)', 'slot': 'SBS' },
  { 'name': 'The X-Files', 'network': 'FOX', 'link': 'http://www.fox.com/the-x-files/', 'image': 'XFiles2016.gif', 'info': 'Wednesdays 8:00PM (Wednesday, January 3)', 'slot': 'SBS' },
  { 'name': 'Homeland', 'network': 'Showtime', 'link': 'http://www.sho.com/sho/homeland/home', 'image': 'Homeland.gif', 'info': 'Sundays 9:00PM (Sunday, February 11)', 'slot': 'SBS' },
  { 'name': 'Ash vs Evil Dead', 'network': 'Starz', 'link': 'https://www.starz.com/series/ashvsevildead', 'image': 'AshVsEvilDead.gif', 'info': 'Sundays 9:00PM (Sunday, February 25)', 'slot': 'SBS' },
  { 'name': 'Jessica Jones', 'network': 'Netflix', 'link': 'http://www.netflix.com/jessicajones', 'image': 'JessicaJones.gif', 'info': 'Streaming (March 8)', 'slot': 'SBS' },
  { 'name': 'Krypton', 'network': 'Syfy', 'link': 'http://www.syfy.com/krypton/', 'image': 'Krypton.gif', 'info': 'Wednesdays (Wednesday, March 21)', 'slot': 'SBS' },
  { 'name': 'A Series of Unfortunate Events', 'network': 'Netflix', 'link': 'http://www.netflix.com/unfortunate', 'image': 'Unfortunate.gif', 'info': 'Streaming (March 30)', 'slot': 'SBS' },
  { 'name': 'Elementary', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/elementary/', 'image': 'Elementary.gif', 'info': 'Mondays 10:00PM (Monday, April 30)', 'slot': 'SBS' },
  { 'name': 'True Detective', 'network': 'HBO', 'link': 'http://www.hbo.com/true-detective/', 'image': 'TrueDetective.gif', 'info': 'Sundays 9:00PM (June 21)', 'slot': 'SBS' },
  { 'name': 'Daredevil', 'network': 'Netflix', 'link': 'http://www.netflix.com/daredevil', 'image': 'Daredevil2.gif', 'info': 'Streaming (March 18)', 'slot': 'SBS' },
  { 'name': 'Fugget About It', 'network': 'Hulu', 'link': 'http://www.hulu.com/fugget-about-it/', 'image': 'FuggetAboutIt.gif', 'info': 'Streaming (October 28)', 'slot': 'SBS' },
  { 'name': 'Luke Cage', 'network': 'Netflix', 'link': 'http://www.netflix.com/lukecage', 'image': 'LukeCage.gif', 'info': 'Streaming (September 30)', 'slot': 'SBS' },
  { 'name': 'Westworld', 'network': 'HBO', 'link': 'http://www.hbo.com/westworld/', 'image': 'Westworld.gif', 'info': 'Sundays 9:00PM (October 2)', 'slot': 'SBS' },
  { 'name': 'Taboo', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/taboo/', 'image': 'Taboo.gif', 'info': 'Tuesdays 10:00PM (Tuesday, January 10)', 'slot': 'SBS' },
  { 'name': 'The Expanse', 'network': 'Syfy', 'link': 'http://www.syfy.com/expanse/', 'image': 'Expanse.gif', 'info': 'Fridays', 'slot': 'SBS' },
  { 'name': 'Iron Fist', 'network': 'Netflix', 'link': 'http://www.netflix.com/ironfist', 'image': 'IronFist.gif', 'info': 'Streaming (March 17)', 'slot': 'SBS' },
  { 'name': 'Archer', 'network': 'FXX', 'link': 'http://www.fxnetworks.com/shows/archer/', 'image': 'Archer.gif', 'info': 'Wednesday 10:00PM (Wednesdays, April 5)', 'slot': 'SBS' },
  { 'name': 'The Handmaids Tale', 'network': 'Hulu', 'link': 'http://www.hulu.com/the-handmaids-tale/', 'image': 'HandmaidsTale.gif', 'info': 'Streaming (April 26)', 'slot': 'SBS' },
  { 'name': 'American Gods', 'network': 'Starz', 'link': 'http://www.starz.com/americangods/', 'image': 'AmericanGods.gif', 'info': 'Sundays 9:00 PM (Sunday, April 30)', 'slot': 'SBS' },
  { 'name': 'Better Call Saul', 'network': 'AMC', 'link': 'http://www.amctv.com/shows/better-call-saul/', 'image': 'BetterCallSaul.gif', 'info': 'Mondays 10:00PM (Monday, April 10)', 'slot': 'SBS' },
  { 'name': 'House of Cards', 'network': 'Netflix', 'link': 'http://www.netflix.com/houseofcards', 'image': 'HouseOfCards.gif', 'info': 'Streaming (May 30)', 'slot': 'SBS' },
  { 'name': 'Orange is the New Black', 'network': 'Netflix', 'link': 'http://www.netflix.com/orangeisthenewblack', 'image': 'OrangeIsTheNewBlack.gif', 'info': 'Streaming (June 9)', 'slot': 'SBS' },
  { 'name': 'Silicon Valley', 'network': 'HBO', 'link': 'http://www.hbo.com/silicon-valley/', 'image': 'SiliconValley.gif', 'info': 'Sundays 10:00PM (April 23)', 'slot': 'SBS' },
  { 'name': 'Doctor Who', 'network': 'BBC', 'link': 'http://www.bbcamerica.com/doctor-who/', 'image': 'DoctorWho.gif', 'info': 'Saturdays 9:00PM (Saturday, April 15)', 'slot': 'SBS' },
  { 'name': 'The Defenders', 'network': 'Netflix', 'link': 'http://www.netflix.com/defenders', 'image': 'Defenders.gif', 'info': 'Streaming (August 18)', 'slot': 'SBS' },
  { 'name': 'Game of Thrones', 'network': 'HBO', 'link': 'http://www.hbo.com/game-of-thrones/', 'image': 'GameOfThrones.gif', 'info': 'Sundays 9:00PM (July 16)', 'slot': 'SBS' },
  { 'name': 'Rick and Morty', 'network': 'AS', 'link': 'http://www.adultswim.com/RickAndMorty', 'image': 'RickAndMorty.gif', 'info': 'Sundays (July 30)', 'slot': 'SBS' },
  { 'name': 'Narcos', 'network': 'Netflix', 'link': 'http://www.netflix.com/narcos', 'image': 'Narcos.gif', 'info': 'Streaming (September 1)', 'slot': 'SBS' },
  { 'name': 'Stranger Things', 'network': 'Netflix', 'link': 'http://www.netflix.com/strangerthings', 'image': 'StrangerThings.gif', 'info': 'Streaming (October 31)', 'slot': 'SBS' },
  { 'name': 'Last Week Tonight', 'network': 'HBO', 'link': 'http://www.hbo.com/last-week-tonight-with-john-oliver/', 'image': 'LastWeekTonight2.gif', 'info': 'Sundays 11:00PM (February 14)', 'slot': 'SBS' },
  { 'name': 'Real Housewives of Orange County', 'network': 'Bravo', 'link': 'http://www.bravotv.com/the-real-housewives-of-orange-county', 'image': 'RealHousewivesOrangeCounty.gif', 'info': 'Mondays 9:00PM (July 10)', 'slot': 'SBS' },
  { 'name': 'American Horror Story', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/american-horror-story/', 'image': 'AmericanHorrorStory.gif', 'info': 'Tuesdays 10:00PM (Tuesday, September 5)', 'slot': 'SBS' },
  { 'name': 'The Orville', 'network': 'FOX', 'link': 'http://www.fox.com/the-orville/', 'image': 'Orville.gif', 'info': 'Thursdays 9:00PM (Sunday, September 10)', 'slot': 'SBS' },
  { 'name': 'Survivor', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/survivor/', 'image': 'Survivor.gif', 'info': 'Wednesdays 8:00PM (Wednesday, September 27)', 'slot': 'SBS' }
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
