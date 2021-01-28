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
  { 'name': 'Streaming', 'time': [ { 'slot': 'N8' }, { 'slot': 'N9' }, { 'slot': 'NX' } ] },
  { 'name': 'Hiatus', 'time': [ { 'slot': 'H8' }, { 'slot': 'H9' }, { 'slot': 'HX' } ] }
];

const SHOWS: IShow[] = [
  { 'name': 'American Gods', 'network': 'Starz', 'link': 'http://www.starz.com/americangods/', 'image': 'AmericanGods3', 'info': 'Sundays 8:00PM', 'season': 3, 'start': 'January 10, 2021', 'slot': 'SBS' },
  { 'name': 'American Horror Story', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/american-horror-story/', 'image': 'AmericanHorrorStory', 'info': 'Wednesdays 10:00PM', 'season': 9, 'start': 'September 18, 2019', 'slot': 'SBS' },
  { 'name': 'Archer', 'network': 'FXX', 'link': 'http://www.fxnetworks.com/shows/archer/', 'image': 'Archer', 'info': 'Wednesdays 10:00PM', 'season': 11, 'start': 'September 16, 2020', 'slot': 'SBS' },
  { 'name': 'Bad Batch', 'network': 'Disney+', 'link': 'https://www.starwars.com/disneyplus', 'image': 'BadBatch', 'info': 'Streaming', 'season': 1, 'start': 'January 1, 2017', 'slot': 'SBS' },
  { 'name': 'Batwoman', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/batwoman/', 'image': 'Batwoman', 'info': 'Sundays 8:00PM', 'season': 2, 'start': 'January 17, 2021', 'slot': 'SBS' },
  { 'name': 'Better Call Saul', 'network': 'AMC', 'link': 'http://www.amctv.com/shows/better-call-saul/', 'image': 'BetterCallSaul', 'info': 'Sundays 10:00PM', 'season': 5, 'start': 'February 23, 2020', 'slot': 'SBS' },
  { 'name': 'Big Mouth', 'network': 'Netflix', 'link': 'http://www.netflix.com/bigmouth', 'image': 'BigMouth', 'info': 'Streaming', 'season': 4, 'start': 'December 4, 2020', 'slot': 'SBS' },
  { 'name': 'Black Mirror', 'network': 'Netflix', 'link': 'http://www.netflix.com/blackmirror', 'image': 'BlackMirror', 'info': 'Streaming', 'season': 5, 'start': 'June 5, 2019', 'slot': 'SBS' },
  { 'name': 'Book of Boba Fett', 'network': 'Disney+', 'link': 'https://www.starwars.com/disneyplus', 'image': 'BookOfBobaFett', 'info': 'Streaming', 'season': 1, 'start': 'January 1, 2017', 'slot': 'SBS' },
  { 'name': 'Carnival Row', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B07S47J47H', 'image': 'CarnivalRow', 'info': 'Streaming', 'season': 1, 'start': 'August 30, 2019', 'slot': 'SBS' },
  { 'name': 'Castlevania', 'network': 'Netflix', 'link': 'http://www.netflix.com/castlevania', 'image': 'Castlevania', 'info': 'Streaming', 'season': 3, 'start': 'March 5, 2020', 'slot': 'SBS' },
  { 'name': 'Cobra Kai', 'network': 'Netflix', 'link': 'http://www.netflix.com/CobraKai', 'image': 'CobraKai', 'info': 'Streaming', 'season': 3, 'start': 'January 1, 2021', 'slot': 'SBS' },
  { 'name': 'Crossing Swords', 'network': 'Hulu', 'link': 'http://www.hulu.com/crossing-swords/', 'image': 'CrossingSwords', 'info': 'Streaming', 'season': 1, 'start': 'June 12, 2020', 'slot': 'SBS' },
  { 'name': 'Cursed', 'network': 'Netflix', 'link': 'http://www.netflix.com/cursed', 'image': 'Cursed', 'info': 'Streaming', 'season': 1, 'start': 'July 17, 2020', 'slot': 'SBS' },
  { 'name': 'Disenchanement', 'network': 'Netflix', 'link': 'http://www.netflix.com/disenchantment', 'image': 'Disenchantment', 'info': 'Streaming', 'season': 3, 'start': 'January 15, 2021', 'slot': 'SBS' },
  { 'name': 'Doctor Who', 'network': 'BBC', 'link': 'http://www.bbcamerica.com/doctor-who/', 'image': 'DoctorWho11', 'info': 'Sundays 8:00PM', 'season': 12, 'start': 'January 1, 2020', 'slot': 'SBS' },
  { 'name': 'F is for Family', 'network': 'Netflix', 'link': 'http://www.netflix.com/fisforfamily', 'image': 'FIsForFamily', 'info': 'Streaming', 'start': 'June 12, 2020', 'slot': 'SBS' },
  { 'name': 'His Dark Materials', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'HisDarkMaterials', 'info': 'Mondays 9:00PM', 'season': 2, 'start': 'November 16, 2020', 'slot': 'SBS' },
  { 'name': 'Kenobi', 'network': 'Disney+', 'link': 'https://www.starwars.com/disneyplus', 'image': 'Kenobi', 'info': 'Streaming', 'season': 1, 'start': 'January 1, 2017', 'slot': 'SBS' },
  { 'name': 'Last Week Tonight', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'LastWeekTonight', 'info': 'Sundays 11:00PM', 'season': 8, 'start': 'February 14, 2021', 'slot': 'SBS' },
  { 'name': 'Legends of Tomorrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/dcs-legends-of-tomorrow/', 'image': 'LegendsOfTomorrow', 'info': 'Tuesdays 9:00PM', 'season': 5, 'start': 'January 14, 2020', 'slot': 'SBS' },
  { 'name': 'Locke and Key', 'network': 'Netflix', 'link': 'http://www.netflix.com/locke&key', 'image': 'LockeAndKey', 'info': 'Streaming', 'season': 1, 'start': 'February 7, 2020', 'slot': 'SBS' },
  { 'name': 'Lost In Space', 'network': 'Netflix', 'link': 'http://www.netflix.com/lostinspace', 'image': 'LostInSpace', 'info': 'Streaming', 'season': 2, 'start': 'December 24, 2019', 'slot': 'SBS' },
  { 'name': 'Lovecraft Country', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'LovecraftCountry', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'August 16, 2020', 'slot': 'SBS' },
  { 'name': 'Ozark', 'network': 'Netflix', 'link': 'http://www.netflix.com/ozark', 'image': 'Ozark', 'info': 'Streaming', 'season': 3, 'start': 'March 27, 2020', 'slot': 'SBS' },
  { 'name': 'Paradise P.D.', 'network': 'Netflix', 'link': 'http://www.netflix.com/paradisepd', 'image': 'ParadisePD', 'info': 'Streaming', 'season': 2, 'start': 'March 6, 2020', 'slot': 'SBS' },
  { 'name': 'Perry Mason', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'PerryMason', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'June 21, 2020', 'slot': 'SBS' },
  { 'name': 'Ratched', 'network': 'Netflix', 'link': 'http://www.netflix.com/ratched', 'image': 'Ratched', 'info': 'Streaming', 'season': 1, 'start': 'September 18, 2020', 'slot': 'SBS' },
  { 'name': 'Real Time with Bill Maher', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'RealTime', 'info': 'Fridays 10:00PM', 'season': 18, 'start': 'January 15, 2021', 'slot': 'SBS' },
  { 'name': 'Rick and Morty', 'network': 'AS', 'link': 'http://www.adultswim.com/RickAndMorty', 'image': 'RickAndMorty', 'info': 'Sundays', 'season': 4, 'start': 'November 10, 2019', 'slot': 'SBS' },
  { 'name': 'Saturday Night Live', 'network': 'NBC', 'link': 'http://www.nbc.com/saturday-night-live/', 'image': 'SaturdayNightLive41', 'info': 'Saturdays 11:30PM', 'season': 46, 'start': 'October 3, 2020', 'slot': 'SBS' },
  { 'name': 'Solar Opposites', 'network': 'Hulu', 'link': 'http://www.hulu.com/solar-opposites/', 'image': 'SolarOpposites', 'info': 'Streaming', 'season': 1, 'start': 'May 8, 2020', 'slot': 'SBS' },
  { 'name': 'Space Force', 'network': 'Netflix', 'link': 'http://www.netflix.com/spaceforce', 'image': 'SpaceForce', 'info': 'Streaming', 'season': 1, 'start': 'May 29, 2020', 'slot': 'SBS' },
  { 'name': 'Stranger Things', 'network': 'Netflix', 'link': 'http://www.netflix.com/strangerthings', 'image': 'StrangerThings', 'info': 'Streaming', 'season': 3, 'start': 'July 4, 2019', 'slot': 'SBS' },
  { 'name': 'Supergirl', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supergirl/', 'image': 'Supergirl', 'info': 'Sundays 9:00PM', 'season': 5, 'start': 'October 6, 2019', 'slot': 'SBS' },
  { 'name': 'Survivor', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/survivor/', 'image': 'Survivor', 'info': 'Wednesdays 8:00PM', 'season': 40, 'start': 'February 12, 2020', 'slot': 'SBS' },
  { 'name': 'Taboo', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/taboo/', 'image': 'Taboo', 'info': 'Tuesdays 10:00PM', 'season': 1, 'start': 'January 10, 2017', 'slot': 'SBS' },
  { 'name': 'The Boys', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B0875L45GK', 'image': 'TheBoys', 'info': 'Streaming', 'season': 2, 'start': 'September 4, 2020', 'slot': 'SBS' },
  { 'name': 'The Expanse', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B08MMJTJSH', 'image': 'Expanse', 'info': 'Streaming', 'season': 5, 'start': 'December 16, 2020', 'slot': 'SBS' },
  { 'name': 'The Flash', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/the-flash/', 'image': 'TheFlash', 'info': 'Tuesdays 8:00PM', 'season': 6, 'start': 'October 8, 2019', 'slot': 'SBS' },
  { 'name': 'The Handmaids Tale', 'network': 'Hulu', 'link': 'http://www.hulu.com/the-handmaids-tale/', 'image': 'HandmaidsTale', 'info': 'Streaming', 'season': 3, 'start': 'June 5, 2019', 'slot': 'SBS' },
  { 'name': 'The Mandalorian', 'network': 'Disney+', 'link': 'https://disneyplusoriginals.disney.com/show/the-mandalorian', 'image': 'Mandalorian', 'info': 'Streaming', 'season': 2, 'start': 'October 30, 2020', 'slot': 'SBS' },
  { 'name': 'The Orville', 'network': 'FOX', 'link': 'http://www.fox.com/the-orville/', 'image': 'Orville', 'info': 'Thursdays 9:00PM', 'season': 2, 'start': 'December 30, 2018', 'slot': 'SBS' },
  { 'name': 'The Rookie', 'network': 'ABC', 'link': 'http://www.abc.com/shows/the-rookie', 'image': 'TheRookie', 'info': 'Sundays 10:00PM', 'season': 3, 'start': 'January 3, 2021', 'slot': 'SBS' },
  { 'name': 'The Umbrella Academy', 'network': 'Netflix', 'link': 'http://www.netflix.com/umbrellaacademy', 'image': 'UmbrellaAcademy', 'info': 'Streaming', 'season': 2, 'start': 'July 31, 2020', 'slot': 'SBS' },
  { 'name': 'The Walking Dead', 'network': 'AMC', 'link': 'http://www.amctv.com/series/The-Walking-Dead/', 'image': 'WalkingDead', 'info': 'Sundays 9:00PM', 'season': 10, 'start': 'October 6, 2019', 'slot': 'SBS' },
  { 'name': 'The Witcher', 'network': 'Netflix', 'link': 'http://www.netflix.com/thewitcher', 'image': 'Witcher', 'info': 'Streaming', 'season': 1, 'start': 'December 20, 2019', 'slot': 'SBS' },
  { 'name': 'True Detective', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'TrueDetective3', 'info': 'Sundays 9:00PM', 'season': 3, 'start': 'January 13, 2019', 'slot': 'SBS' },
  { 'name': 'Truth Seekers', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B08J18TQ9T', 'image': 'TruthSeekers', 'info': 'Streaming', 'season': 1, 'start': 'October 30, 2020', 'slot': 'SBS' },
  { 'name': 'Westworld', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'Westworld', 'info': 'Sundays 9:00PM', 'season': 3, 'start': 'March 15, 2020', 'slot': 'SBS' },
  { 'name': 'What We Do in the Shadows', 'network': 'FX', 'link': 'https://www.fxnetworks.com/shows/what-we-do-in-the-shadows', 'image': 'WhatWeDoInTheShadows', 'info': 'Wednesdays 10:00PM', 'season': 2, 'start': 'April 15, 2020', 'slot': 'SBS' },
  { 'name': 'Your Honor', 'network': 'Showtime', 'link': 'http://www.sho.com/your-honor', 'image': 'YourHonor', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'December 6, 2020', 'slot': 'SBS' },  { 'name': 'Fugget About It', 'network': 'Hulu', 'link': 'http://www.hulu.com/fugget-about-it/', 'image': 'FuggetAboutIt', 'info': 'Streaming', 'season': 3, 'start': 'October 28, 2017', 'slot': 'END' },
  { 'name': 'Bloodline', 'network': 'Netflix', 'link': 'http://www.netflix.com/bloodline', 'image': 'Bloodline', 'info': 'Streaming', 'season': 3, 'start': 'May 26, 2017', 'slot': 'END' },
  { 'name': 'Star Wars Rebels', 'network': 'DisneyXD', 'link': 'http://www.starwars.com/tv-shows/star-wars-rebels', 'image': 'Rebels', 'info': 'Mondays 9:00PM', 'season': 4, 'start': 'October 16, 2017', 'slot': 'END' },
  { 'name': 'The X-Files', 'network': 'FOX', 'link': 'http://www.fox.com/the-x-files/', 'image': 'XFiles2016', 'info': 'Wednesdays 8:00PM', 'start': 'January 3, 2018', 'slot': 'END' },
  { 'name': 'Ash vs Evil Dead', 'network': 'Starz', 'link': 'https://www.starz.com/series/ashvsevildead', 'image': 'AshVsEvilDead3', 'info': 'Sundays 9:00PM', 'start': 'February 25, 2018', 'slot': 'END' },
  { 'name': 'The Defenders', 'network': 'Netflix', 'link': 'http://www.netflix.com/defenders', 'image': 'Defenders', 'info': 'Streaming', 'start': 'August 18, 2017', 'slot': 'END' },
  { 'name': 'Narcos', 'network': 'Netflix', 'link': 'http://www.netflix.com/narcos', 'image': 'Narcos', 'info': 'Streaming', 'start': 'September 1, 2017', 'slot': 'END' },
  { 'name': 'Iron Fist', 'network': 'Netflix', 'link': 'http://www.netflix.com/ironfist', 'image': 'IronFist', 'info': 'Streaming', 'start': 'September 7, 2018', 'slot': 'END' },
  { 'name': 'Luke Cage', 'network': 'Netflix', 'link': 'http://www.netflix.com/lukecage', 'image': 'LukeCage', 'info': 'Streaming', 'start': 'June 22, 2018', 'slot': 'END' },
  { 'name': 'Who Is America', 'network': 'Showtime', 'link': 'http://www.sho.com/who-is-america', 'image': 'WhoIsAmerica', 'info': 'Sundays 10:00PM', 'start': 'July 15, 2018', 'slot': 'END' },
  { 'name': 'House of Cards', 'network': 'Netflix', 'link': 'http://www.netflix.com/houseofcards', 'image': 'HouseOfCards', 'info': 'Streaming', 'start': 'November 2, 2018', 'slot': 'END' },
  { 'name': 'A Series of Unfortunate Events', 'network': 'Netflix', 'link': 'http://www.netflix.com/unfortunate', 'image': 'Unfortunate', 'info': 'Streaming', 'start': 'January 1, 2019', 'slot': 'END' },
  { 'name': 'Daredevil', 'network': 'Netflix', 'link': 'http://www.netflix.com/daredevil', 'image': 'Daredevil2', 'info': 'Streaming', 'start': 'October 19 2018,', 'slot': 'END' },
  { 'name': 'Gotham', 'network': 'FOX', 'link': 'http://www.fox.com/gotham/', 'image': 'Gotham2', 'info': 'Thursdays 8:00PM', 'start': 'January 3, 2019', 'slot': 'END' },
  { 'name': 'Big Bang Theory', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/big_bang_theory/', 'image': 'BigBangTheory', 'info': 'Thursdays 8:00PM', 'start': 'September 24, 2018', 'slot': 'END' },
  { 'name': 'Game of Thrones', 'network': 'HBO', 'link': 'http://www.hbo.com/game-of-thrones/', 'image': 'GameOfThrones', 'info': 'Sundays 9:00PM', 'start': 'April 14, 2019', 'slot': 'END' },
  { 'name': 'The Punisher', 'network': 'Netflix', 'link': 'http://www.netflix.com/the-punisher', 'image': 'Punisher', 'info': 'Streaming', 'start': 'January 18, 2019', 'slot': 'END' },
  { 'name': 'Good Omens', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B07FMHTRFD', 'image': 'GoodOmens', 'info': 'Streaming', 'start': 'May 31, 2019', 'slot': 'END' },
  { 'name': 'Jessica Jones', 'network': 'Netflix', 'link': 'http://www.netflix.com/jessicajones', 'image': 'JessicaJones', 'info': 'Streaming', 'start': 'June 14, 2019', 'slot': 'END' },
  { 'name': 'Orange is the New Black', 'network': 'Netflix', 'link': 'http://www.netflix.com/orangeisthenewblack', 'image': 'OrangeIsTheNewBlack', 'info': 'Streaming', 'start': 'July 26, 2019', 'slot': 'END' },
  { 'name': 'Elementary', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/elementary/', 'image': 'Elementary', 'info': 'Thursdays 10:00PM', 'start': 'May 23, 2019', 'slot': 'END' },
  { 'name': 'Krypton', 'network': 'Syfy', 'link': 'http://www.syfy.com/krypton/', 'image': 'Krypton', 'info': 'Wednesdays 10:00PM', 'season': 2, 'start': 'June 12, 2019', 'slot': 'END' },
  { 'name': 'Silicon Valley', 'network': 'HBO', 'link': 'http://www.hbo.com/silicon-valley/', 'image': 'SiliconValley', 'info': 'Sundays 10:00PM', 'season': 6, 'start': 'October 27, 2019', 'slot': 'END' },
  { 'name': 'Star Wars Resistance', 'network': 'DisneyXD', 'link': 'http://www.starwars.com/tv-shows/star-wars-resistance', 'image': 'Resistance', 'info': 'Sundays 10:00PM', 'season': 2, 'start': 'October 6, 2019', 'slot': 'END' },
  { 'name': 'Arrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/arrow/', 'image': 'Arrow', 'info': 'Tuesdays 9:00PM', 'season': 8, 'start': 'October 15, 2019', 'slot': 'END' },
  { 'name': 'Watchmen', 'network': 'HBO', 'link': 'http://www.hbo.com/watchmen/', 'image': 'Watchmen', 'info': 'Sundays 9:00PM', 'season': 1, 'start': 'October 20, 2019', 'slot': 'END' },
  { 'name': 'Criminal Minds', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/criminal_minds/', 'image': 'CriminalMinds', 'info': 'Wednesdays 10:00PM', 'season': 15, 'start': 'January 8, 2020', 'slot': 'END' },
  { 'name': 'Vikings', 'network': 'History', 'link': 'http://www.history.com/shows/vikings', 'image': 'Vikings', 'info': 'Wednesdays 9:00PM', 'season': 6, 'start': 'December 4, 2019', 'slot': 'END' },
  { 'name': 'Homeland', 'network': 'Showtime', 'link': 'http://www.sho.com/homeland', 'image': 'Homeland', 'info': 'Sundays 9:00PM', 'season': 8, 'start': 'February 9, 2020', 'slot': 'END' },
  { 'name': 'Dark Crystal: Age of Resistance', 'network': 'Netflix', 'link': 'http://www.netflix.com/title/80148535', 'image': 'DarkCrystalAge', 'info': 'Streaming', 'season': 1, 'start': 'August 30, 2019', 'slot': 'END' },
  { 'name': 'Mindhunter', 'network': 'Netflix', 'link': 'http://www.netflix.com/mindhunter', 'image': 'Mindhunter', 'info': 'Streaming', 'season': 2, 'start': 'August 16, 2019', 'slot': 'END' },
  { 'name': 'The Stranger', 'network': 'Netflix', 'link': 'http://www.netflix.com/thestranger', 'image': 'TheStranger', 'info': 'Streaming', 'season': 1, 'start': 'January 30, 2020', 'slot': 'END' },
  { 'name': 'The Outsider', 'network': 'HBO', 'link': 'http://www.hbo.com/the-outsider/', 'image': 'Outsider', 'info': 'Sundays 9:00PM', 'season': 1, 'start': 'January 12, 2020', 'slot': 'END' },
  { 'name': 'The Order', 'network': 'Netflix', 'link': 'https://www.netflix.com/theorder', 'image': 'TheOrder', 'info': 'Streaming', 'start': 'June 18, 2020', 'slot': 'END' },
  { 'name': 'Altered Carbon', 'network': 'Netflix', 'link': 'http://www.netflix.com/alteredcarbon', 'image': 'AlteredCarbon', 'info': 'Streaming', 'season': 2, 'start': 'February 27, 2020', 'slot': 'END' },
  { 'name': 'Penny Dreadful: City of Angels', 'network': 'Showtime', 'link': 'http://www.sho.com/penny-dreadful-city-of-angels', 'image': 'PennyDreadfulCityOfAngels', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'April 26, 2020', 'slot': 'END' },
  { 'name': 'Supernatural', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supernatural/', 'image': 'Supernatural15', 'info': 'Thursdays 8:00PM', 'season': 15, 'start': 'October 08, 2020', 'slot': 'END' },
  { 'name': 'Chilling Adventures of Sabrina', 'network': 'Netflix', 'link': 'http://www.netflix.com/chillingadventuresofsabrina', 'image': 'Sabrina', 'info': 'Streaming', 'season': 4, 'start': 'December 31, 2020', 'slot': 'END' }
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
  { 'name': 'H8', 'shows': [] },
  { 'name': 'H9', 'shows': [] },
  { 'name': 'HX', 'shows': [] },
  { 'name': 'SBS', 'shows': SHOWS },
  { 'name': 'END', 'shows': SHOWS.filter(show => show.slot === 'END') }
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
    return (SHOWS.findIndex(s => s.name === showName) >= 0) ? true : false;
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
}
