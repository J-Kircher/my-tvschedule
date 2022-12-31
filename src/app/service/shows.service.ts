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
  { 'name': 'American Horror Story', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/american-horror-story/', 'image': 'AmericanHorrorStory', 'type': 'gif', 'info': 'Wednesdays 10:00PM', 'season': 11, 'start': 'October 19, 2022', 'slot': 'SBS' },
  { 'name': 'Andor', 'network': 'Disney+', 'link': 'https://disneyplusoriginals.disney.com/show/andor', 'image': 'Andor', 'type': 'png', 'info': 'Streaming Wednesdays', 'season': 1, 'start': 'September 21, 2022', 'slot': 'SBS' },
  { 'name': 'Avenue 5', 'network': 'HBOMax', 'link': 'https://www.hbo.com/avenue-5', 'image': 'Avenue5', 'type': 'gif', 'info': 'Mondays 10:00PM', 'season': 2, 'start': 'October 10, 2022', 'slot': 'SBS' },
  { 'name': 'Bad Batch', 'network': 'Disney+', 'link': 'https://www.disneyplus.com/series/the-bad-batch/4gMliqFxxqXC', 'image': 'BadBatch', 'type': 'png', 'info': 'Streaming', 'season': 2, 'start': 'January 4, 2023', 'slot': 'SBS' },
  { 'name': 'Big Mouth', 'network': 'Netflix', 'link': 'http://www.netflix.com/bigmouth', 'image': 'BigMouth', 'type': 'gif', 'info': 'Streaming', 'season': 6, 'start': 'October 28, 2022', 'slot': 'SBS' },
  { 'name': 'Black Mirror', 'network': 'Netflix', 'link': 'http://www.netflix.com/blackmirror', 'image': 'BlackMirror', 'type': 'gif', 'info': 'Streaming', 'season': 5, 'start': 'June 5, 2019', 'slot': 'SBS' },
  { 'name': 'Carnival Row', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B07S47J47H', 'image': 'CarnivalRow', 'type': 'gif', 'info': 'Streaming', 'season': 1, 'start': 'August 30, 2019', 'slot': 'SBS' },
  { 'name': 'Cobra Kai', 'network': 'Netflix', 'link': 'http://www.netflix.com/CobraKai', 'image': 'CobraKai', 'type': 'gif', 'info': 'Streaming', 'season': 5, 'start': 'September 9, 2022', 'slot': 'SBS' },
  { 'name': 'Criminal Minds - Evolution', 'network': 'Paramount+', 'link': 'https://www.paramountplus.com/shows/criminal_minds/', 'image': 'CriminalMindsEvolution', 'type': 'png', 'info': 'Wednesdays 10:00PM', 'season': 1, 'start': 'November 24, 2022', 'slot': 'SBS' },
  { 'name': 'Crossing Swords', 'network': 'Hulu', 'link': 'http://www.hulu.com/crossing-swords/', 'image': 'CrossingSwords', 'type': 'gif', 'info': 'Streaming', 'season': 2, 'start': 'December 10, 2021', 'slot': 'SBS' },
  { 'name': 'Disenchanement', 'network': 'Netflix', 'link': 'http://www.netflix.com/disenchantment', 'image': 'Disenchantment', 'type': 'gif', 'info': 'Streaming', 'season': 4, 'start': 'February 9, 2022', 'slot': 'SBS' },
  { 'name': 'Doctor Who', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:GXnzXWA8PcFSpjQEAAATH:type:series', 'image': 'DoctorWho11', 'type': 'gif', 'info': 'Sundays 8:00PM', 'season': 13, 'start': 'October 31, 2021', 'slot': 'SBS' },
  { 'name': 'Farzar', 'network': 'Netflix', 'link': 'http://www.netflix.com/farzar', 'image': 'Farzar', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'July 15, 2022', 'slot': 'SBS' },
  { 'name': 'Good Omens', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B07FMHTRFD', 'image': 'GoodOmens', 'type': 'gif', 'info': 'Streaming', 'season': 1, 'start': 'May 31, 2019', 'slot': 'SBS' },
  { 'name': 'His Dark Materials', 'network': 'HBOMax', 'link': 'https://www.hbo.com/his-dark-materials', 'image': 'HisDarkMaterials', 'type': 'gif', 'info': 'Mondays 9:00PM', 'season': 3, 'start': 'December 5, 2022', 'slot': 'SBS' },
  { 'name': 'House of the Dragon', 'network': 'HBOMax', 'link': 'http://www.hbo.com/house-of-the-dragon/', 'image': 'HouseOfTheDragon', 'type': 'png', 'info': 'Sundays 9:00PM', 'start': 'August 21, 2022', 'slot': 'SBS' },
  { 'name': 'Human Resources', 'network': 'Netflix', 'link': 'http://www.netflix.com/humanresources', 'image': 'HumanResources', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'March 18, 2022', 'slot': 'SBS' },
  { 'name': 'Interview with the Vampire', 'network': 'AMC+', 'link': 'https://www.amcplus.com/pages/anne-rice-collection', 'image': 'InterviewWithTheVampire', 'type': 'png', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'October 2, 2022', 'slot': 'SBS' },
  { 'name': 'Invincible', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B08WJMRHYZ', 'image': 'Invincible', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'March 25, 2021', 'slot': 'SBS' },
  { 'name': 'Jack Ryan', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B07V3TNS85', 'image': 'JackRyan3', 'type': 'png', 'info': 'Streaming', 'season': 3, 'start': 'December 21, 2022', 'slot': 'SBS' },
  { 'name': 'Kenobi', 'network': 'Disney+', 'link': 'https://disneyplusoriginals.disney.com/show/obi-wan-kenobi', 'image': 'Kenobi', 'type': 'gif', 'info': 'Streaming Wednesdays', 'season': 1, 'start': 'May 27, 2022', 'slot': 'SBS' },
  { 'name': 'Last Week Tonight', 'network': 'HBOMax', 'link': 'https://www.hbo.com/last-week-tonight-with-john-oliver', 'image': 'LastWeekTonight', 'type': 'gif', 'info': 'Sundays 11:00PM', 'season': 9, 'start': 'February 20, 2022', 'slot': 'SBS' },
  { 'name': 'Loki', 'network': 'Disney+', 'link': 'https://www.disneyplus.com/series/loki/6pARMvILBGzF', 'image': 'Loki', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'June 9, 2021', 'slot': 'SBS' },
  { 'name': 'Moon Knight', 'network': 'Disney+', 'link': 'https://disneyplusoriginals.disney.com/show/moon-knight', 'image': 'MoonKnight', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'March 30, 2022', 'slot': 'SBS' },
  { 'name': 'Peacemaker', 'network': 'HBOMax', 'link': 'https://play.hbomax.com/page/urn:hbo:page:home', 'image': 'Peacemaker', 'type': 'png', 'info': 'Thursdays 10:00PM', 'season': 1, 'start': 'January 13, 2022', 'slot': 'SBS' },
  { 'name': 'Perry Mason', 'network': 'HBOMax', 'link': 'https://www.hbo.com/perry-mason', 'image': 'PerryMason', 'type': 'gif', 'info': 'Sundays 10:00PM', 'season': 2, 'start': 'February 26, 2023', 'slot': 'SBS' },
  { 'name': 'Ratched', 'network': 'Netflix', 'link': 'http://www.netflix.com/ratched', 'image': 'Ratched', 'type': 'gif', 'info': 'Streaming', 'season': 1, 'start': 'September 18, 2020', 'slot': 'SBS' },
  { 'name': 'Real Time with Bill Maher', 'network': 'HBOMax', 'link': 'https://www.hbo.com/real-time-with-bill-maher', 'image': 'RealTime20', 'type': 'png', 'info': 'Fridays 10:00PM', 'season': 20, 'start': 'January 21, 2022', 'slot': 'SBS' },
  { 'name': 'Rick and Morty', 'network': 'AS', 'link': 'http://www.adultswim.com/RickAndMorty', 'image': 'RickAndMorty', 'type': 'gif', 'info': 'Sundays 11:00PM', 'season': 6, 'start': 'September 4, 2022', 'slot': 'SBS' },
  { 'name': 'Saturday Night Live', 'network': 'NBC', 'link': 'http://www.nbc.com/saturday-night-live/', 'image': 'SaturdayNightLive48', 'type': 'png', 'info': 'Saturdays 11:30PM', 'season': 48, 'start': 'October 1, 2022', 'slot': 'SBS' },
  { 'name': 'Severence', 'network': 'AppleTV', 'link': 'https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx', 'image': 'Severance', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'February 18, 2022', 'slot': 'SBS' },
  { 'name': 'Shining Vale', 'network': 'Starz', 'link': 'https://www.starz.com/us/en/series/shining-vale/64078', 'image': 'ShiningVale', 'type': 'png', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'March 6, 2022', 'slot': 'SBS' },
  { 'name': 'Solar Opposites', 'network': 'Hulu', 'link': 'http://www.hulu.com/solar-opposites/', 'image': 'SolarOpposites', 'type': 'gif', 'info': 'Streaming', 'season': 3, 'start': 'July 13, 2022', 'slot': 'SBS' },
  { 'name': 'Squid Game', 'network': 'Netflix', 'link': 'http://www.netflix.com/squidgame', 'image': 'SquidGame', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'September 17, 2021', 'slot': 'SBS' },
  { 'name': 'Star Trek: Discovery', 'network': 'Paramount+', 'link': 'https://www.paramountplus.com/shows/star-trek-discovery/', 'image': 'Discovery', 'type': 'png', 'info': 'Streaming', 'season': 4, 'start': 'November 18, 2021', 'slot': 'SBS' },
  { 'name': 'Star Trek: Picard', 'network': 'Paramount+', 'link': 'https://www.paramountplus.com/shows/star-trek-picard/', 'image': 'Picard2', 'type': 'png', 'info': 'Streaming', 'season': 2, 'start': 'March 3, 2022', 'slot': 'SBS' },
  { 'name': 'Star Trek: Strange New Worlds', 'network': 'Paramount+', 'link': 'https://www.paramountplus.com/shows/star-trek-strange-new-worlds/', 'image': 'StrangeNewWorlds', 'type': 'png', 'info': 'Streaming', 'season': 4, 'start': 'May 5, 2022', 'slot': 'SBS' },
  { 'name': 'Stranger Things', 'network': 'Netflix', 'link': 'http://www.netflix.com/strangerthings', 'image': 'StrangerThings', 'type': 'gif', 'info': 'Streaming', 'season': 4, 'start': 'May 27, 2022', 'slot': 'SBS' },
  { 'name': 'Survivor', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/survivor/', 'image': 'Survivor', 'type': 'gif', 'info': 'Wednesdays 8:00PM', 'season': 43, 'start': 'September 21, 2022', 'slot': 'SBS' },
  { 'name': 'The Boys', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B09WV8HF7Q', 'image': 'TheBoys3', 'type': 'png', 'info': 'Streaming Fridays', 'season': 3, 'start': 'June 3, 2022', 'slot': 'SBS' },
  { 'name': 'The Crown', 'network': 'Netflix', 'link': 'http://www.netflix.com/thecrown', 'image': 'Crown', 'type': 'gif', 'info': 'Streaming', 'season': 5, 'start': 'November 9, 2022', 'slot': 'SBS' },
  { 'name': 'The Flash', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/the-flash/', 'image': 'TheFlash', 'type': 'gif', 'info': 'Tuesdays 8:00PM', 'season': 8, 'start': 'November 16, 2021', 'slot': 'SBS' },
  { 'name': 'The Handmaids Tale', 'network': 'Hulu', 'link': 'http://www.hulu.com/the-handmaids-tale/', 'image': 'HandmaidsTale', 'type': 'gif', 'info': 'Streaming', 'season': 5, 'start': 'September 14, 2022', 'slot': 'SBS' },
  { 'name': 'The Mandalorian', 'network': 'Disney+', 'link': 'https://disneyplusoriginals.disney.com/show/the-mandalorian-season-two', 'image': 'Mandalorian', 'type': 'gif', 'info': 'Streaming', 'season': 2, 'start': 'October 30, 2020', 'slot': 'SBS' },
  { 'name': 'The Rings of Power', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B09QHCPD34', 'image': 'RingsOfPower', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'September 1, 2022', 'slot': 'SBS' },
  { 'name': 'The Rookie', 'network': 'ABC', 'link': 'http://www.abc.com/shows/the-rookie', 'image': 'TheRookie', 'type': 'gif', 'info': 'Sundays 10:00PM', 'season': 5, 'start': 'September 25, 2022', 'slot': 'SBS' },
  { 'name': 'The Sandman', 'network': 'Netflix', 'link': 'http://www.netflix.com/thesandman', 'image': 'Sandman', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'August 5, 2022', 'slot': 'SBS' },
  { 'name': 'The Umbrella Academy', 'network': 'Netflix', 'link': 'http://www.netflix.com/umbrellaacademy', 'image': 'UmbrellaAcademy', 'type': 'gif', 'info': 'Streaming', 'season': 3, 'start': 'June 22, 2022', 'slot': 'SBS' },
  { 'name': 'The Witcher', 'network': 'Netflix', 'link': 'http://www.netflix.com/thewitcher', 'image': 'Witcher', 'type': 'gif', 'info': 'Streaming', 'season': 2, 'start': 'December 17, 2021', 'slot': 'SBS' },
  { 'name': 'The Witcher: Blood Origin', 'network': 'Netflix', 'link': 'http://www.netflix.com/thewitcherbloodorigin', 'image': 'WitcherBloodOrigin', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'December 25, 2022', 'slot': 'SBS' },
  { 'name': 'The Wheel Of Time', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B09F5KBXB6', 'image': 'WheelOfTime', 'type': 'png', 'info': 'Streaming Fridays', 'season': 1, 'start': 'November 19, 2021', 'slot': 'SBS' },
  { 'name': 'True Detective', 'network': 'HBOMax', 'link': 'https://www.hbo.com/true-detective', 'image': 'TrueDetective3', 'type': 'gif', 'info': 'Sundays 9:00PM', 'season': 3, 'start': 'January 13, 2019', 'slot': 'SBS' },
  { 'name': 'Wednesday', 'network': 'Netflix', 'link': 'http://www.netflix.com/wednesday', 'image': 'Wednesday', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'November 23, 2022', 'slot': 'SBS' },
  { 'name': 'What We Do in the Shadows', 'network': 'FX', 'link': 'https://www.fxnetworks.com/shows/what-we-do-in-the-shadows', 'image': 'WhatWeDoInTheShadows', 'type': 'gif', 'info': 'Tuesdays 10:00PM', 'season': 4, 'start': 'July 12, 2022', 'slot': 'SBS' },
  { 'name': 'Willow', 'network': 'Disney+', 'link': 'https://disneyplusoriginals.disney.com/show/willow', 'image': 'Willow', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'November 30, 2022', 'slot': 'SBS' },
  { 'name': 'Your Honor', 'network': 'Showtime', 'link': 'http://www.sho.com/your-honor', 'image': 'YourHonor', 'type': 'gif', 'info': 'Sundays 10:00PM', 'season': 2, 'start': 'January 13, 2023', 'slot': 'SBS' },
  { 'name': 'Fugget About It', 'network': 'Hulu', 'link': 'http://www.hulu.com/fugget-about-it/', 'image': 'FuggetAboutIt', 'type': 'gif', 'info': 'Streaming', 'season': 3, 'start': 'October 28, 2017', 'slot': 'END' },
  { 'name': 'Bloodline', 'network': 'Netflix', 'link': 'http://www.netflix.com/bloodline', 'image': 'Bloodline', 'type': 'gif', 'info': 'Streaming', 'season': 3, 'start': 'May 26, 2017', 'slot': 'END' },
  { 'name': 'Star Wars Rebels', 'network': 'DisneyXD', 'link': 'http://www.starwars.com/tv-shows/star-wars-rebels', 'image': 'Rebels', 'type': 'gif', 'info': 'Mondays 9:00PM', 'season': 4, 'start': 'October 16, 2017', 'slot': 'END' },
  { 'name': 'The X-Files', 'network': 'FOX', 'link': 'http://www.fox.com/the-x-files/', 'image': 'XFiles2016', 'type': 'gif', 'info': 'Wednesdays 8:00PM', 'start': 'January 3, 2018', 'slot': 'END' },
  { 'name': 'Ash vs Evil Dead', 'network': 'Starz', 'link': 'https://www.starz.com/series/ashvsevildead', 'image': 'AshVsEvilDead3', 'type': 'gif', 'info': 'Sundays 9:00PM', 'start': 'February 25, 2018', 'slot': 'END' },
  { 'name': 'The Defenders', 'network': 'Netflix', 'link': 'http://www.netflix.com/defenders', 'image': 'Defenders', 'type': 'gif', 'info': 'Streaming', 'start': 'August 18, 2017', 'slot': 'END' },
  { 'name': 'Narcos', 'network': 'Netflix', 'link': 'http://www.netflix.com/narcos', 'image': 'Narcos', 'type': 'gif', 'info': 'Streaming', 'start': 'September 1, 2017', 'slot': 'END' },
  { 'name': 'Iron Fist', 'network': 'Netflix', 'link': 'http://www.netflix.com/ironfist', 'image': 'IronFist', 'type': 'gif', 'info': 'Streaming', 'start': 'September 7, 2018', 'slot': 'END' },
  { 'name': 'Luke Cage', 'network': 'Netflix', 'link': 'http://www.netflix.com/lukecage', 'image': 'LukeCage', 'type': 'gif', 'info': 'Streaming', 'start': 'June 22, 2018', 'slot': 'END' },
  { 'name': 'Taboo', 'network': 'FX', 'link': 'http://www.fxnetworks.com/shows/taboo/', 'image': 'Taboo', 'type': 'gif', 'info': 'Tuesdays 10:00PM', 'season': 1, 'start': 'January 10, 2017', 'slot': 'END' },
  { 'name': 'Who Is America', 'network': 'Showtime', 'link': 'http://www.sho.com/who-is-america', 'image': 'WhoIsAmerica', 'type': 'gif', 'info': 'Sundays 10:00PM', 'start': 'July 15, 2018', 'slot': 'END' },
  { 'name': 'House of Cards', 'network': 'Netflix', 'link': 'http://www.netflix.com/houseofcards', 'image': 'HouseOfCards', 'type': 'gif', 'info': 'Streaming', 'start': 'November 2, 2018', 'slot': 'END' },
  { 'name': 'A Series of Unfortunate Events', 'network': 'Netflix', 'link': 'http://www.netflix.com/unfortunate', 'image': 'Unfortunate', 'type': 'gif', 'info': 'Streaming', 'start': 'January 1, 2019', 'slot': 'END' },
  { 'name': 'Daredevil', 'network': 'Netflix', 'link': 'http://www.netflix.com/daredevil', 'image': 'Daredevil2', 'type': 'gif', 'info': 'Streaming', 'start': 'October 19 2018,', 'slot': 'END' },
  { 'name': 'Gotham', 'network': 'FOX', 'link': 'http://www.fox.com/gotham/', 'image': 'Gotham2', 'type': 'gif', 'info': 'Thursdays 8:00PM', 'start': 'January 3, 2019', 'slot': 'END' },
  { 'name': 'Big Bang Theory', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/big_bang_theory/', 'image': 'BigBangTheory', 'type': 'gif', 'info': 'Thursdays 8:00PM', 'start': 'September 24, 2018', 'slot': 'END' },
  { 'name': 'Game of Thrones', 'network': 'HBO', 'link': 'http://www.hbo.com/game-of-thrones/', 'image': 'GameOfThrones', 'type': 'gif', 'info': 'Sundays 9:00PM', 'start': 'April 14, 2019', 'slot': 'END' },
  { 'name': 'The Punisher', 'network': 'Netflix', 'link': 'http://www.netflix.com/the-punisher', 'image': 'Punisher', 'type': 'gif', 'info': 'Streaming', 'start': 'January 18, 2019', 'slot': 'END' },
  { 'name': 'Jessica Jones', 'network': 'Netflix', 'link': 'http://www.netflix.com/jessicajones', 'image': 'JessicaJones', 'type': 'gif', 'info': 'Streaming', 'start': 'June 14, 2019', 'slot': 'END' },
  { 'name': 'Orange is the New Black', 'network': 'Netflix', 'link': 'http://www.netflix.com/orangeisthenewblack', 'image': 'OrangeIsTheNewBlack', 'type': 'gif', 'info': 'Streaming', 'start': 'July 26, 2019', 'slot': 'END' },
  { 'name': 'Elementary', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/elementary/', 'image': 'Elementary', 'type': 'gif', 'info': 'Thursdays 10:00PM', 'start': 'May 23, 2019', 'slot': 'END' },
  { 'name': 'Krypton', 'network': 'Syfy', 'link': 'http://www.syfy.com/krypton/', 'image': 'Krypton', 'type': 'gif', 'info': 'Wednesdays 10:00PM', 'season': 2, 'start': 'June 12, 2019', 'slot': 'END' },
  { 'name': 'Silicon Valley', 'network': 'HBO', 'link': 'http://www.hbo.com/silicon-valley/', 'image': 'SiliconValley', 'type': 'gif', 'info': 'Sundays 10:00PM', 'season': 6, 'start': 'October 27, 2019', 'slot': 'END' },
  { 'name': 'Star Wars Resistance', 'network': 'DisneyXD', 'link': 'http://www.starwars.com/tv-shows/star-wars-resistance', 'image': 'Resistance', 'type': 'gif', 'info': 'Sundays 10:00PM', 'season': 2, 'start': 'October 6, 2019', 'slot': 'END' },
  { 'name': 'Arrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/arrow/', 'image': 'Arrow', 'type': 'gif', 'info': 'Tuesdays 9:00PM', 'season': 8, 'start': 'October 15, 2019', 'slot': 'END' },
  { 'name': 'Watchmen', 'network': 'HBO', 'link': 'http://www.hbo.com/watchmen/', 'image': 'Watchmen', 'type': 'gif', 'info': 'Sundays 9:00PM', 'season': 1, 'start': 'October 20, 2019', 'slot': 'END' },
  { 'name': 'Criminal Minds', 'network': 'CBS', 'link': 'http://www.cbs.com/shows/criminal_minds/', 'image': 'CriminalMinds', 'type': 'gif', 'info': 'Wednesdays 10:00PM', 'season': 15, 'start': 'January 8, 2020', 'slot': 'END' },
  { 'name': 'Vikings', 'network': 'History', 'link': 'http://www.history.com/shows/vikings', 'image': 'Vikings', 'type': 'gif', 'info': 'Wednesdays 9:00PM', 'season': 6, 'start': 'December 4, 2019', 'slot': 'END' },
  { 'name': 'Homeland', 'network': 'Showtime', 'link': 'http://www.sho.com/homeland', 'image': 'Homeland', 'type': 'gif', 'info': 'Sundays 9:00PM', 'season': 8, 'start': 'February 9, 2020', 'slot': 'END' },
  { 'name': 'Dark Crystal: Age of Resistance', 'network': 'Netflix', 'link': 'http://www.netflix.com/title/80148535', 'image': 'DarkCrystalAge', 'type': 'gif', 'info': 'Streaming', 'season': 1, 'start': 'August 30, 2019', 'slot': 'END' },
  { 'name': 'Mindhunter', 'network': 'Netflix', 'link': 'http://www.netflix.com/mindhunter', 'image': 'Mindhunter', 'type': 'gif', 'info': 'Streaming', 'season': 2, 'start': 'August 16, 2019', 'slot': 'END' },
  { 'name': 'The Stranger', 'network': 'Netflix', 'link': 'http://www.netflix.com/thestranger', 'image': 'TheStranger', 'type': 'gif', 'info': 'Streaming', 'season': 1, 'start': 'January 30, 2020', 'slot': 'END' },
  { 'name': 'The Outsider', 'network': 'HBO', 'link': 'http://www.hbo.com/the-outsider/', 'image': 'Outsider', 'type': 'gif', 'info': 'Sundays 9:00PM', 'season': 1, 'start': 'January 12, 2020', 'slot': 'END' },
  { 'name': 'The Order', 'network': 'Netflix', 'link': 'https://www.netflix.com/theorder', 'image': 'TheOrder', 'type': 'gif', 'info': 'Streaming', 'start': 'June 18, 2020', 'slot': 'END' },
  { 'name': 'Altered Carbon', 'network': 'Netflix', 'link': 'http://www.netflix.com/alteredcarbon', 'image': 'AlteredCarbon', 'type': 'gif', 'info': 'Streaming', 'season': 2, 'start': 'February 27, 2020', 'slot': 'END' },
  { 'name': 'Penny Dreadful: City of Angels', 'network': 'Showtime', 'link': 'http://www.sho.com/penny-dreadful-city-of-angels', 'image': 'PennyDreadfulCityOfAngels', 'type': 'gif', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'April 26, 2020', 'slot': 'END' },
  { 'name': 'Supernatural', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supernatural/', 'image': 'Supernatural15', 'type': 'gif', 'info': 'Thursdays 8:00PM', 'season': 15, 'start': 'October 08, 2020', 'slot': 'END' },
  { 'name': 'Truth Seekers', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B08J18TQ9T', 'image': 'TruthSeekers', 'type': 'gif', 'info': 'Streaming', 'season': 1, 'start': 'October 30, 2020', 'slot': 'END' },
  { 'name': 'Chilling Adventures of Sabrina', 'network': 'Netflix', 'link': 'http://www.netflix.com/chillingadventuresofsabrina', 'image': 'Sabrina', 'type': 'gif', 'info': 'Streaming', 'season': 4, 'start': 'December 31, 2020', 'slot': 'END' },
  { 'name': 'WandaVision', 'network': 'Disney+', 'link': 'https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH', 'image': 'WandaVision', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'January 15, 2021', 'slot': 'END' },
  { 'name': 'American Gods', 'network': 'Starz', 'link': 'http://www.starz.com/americangods/', 'image': 'AmericanGods3', 'type': 'gif', 'info': 'Sundays 8:00PM', 'season': 3, 'start': 'January 10, 2021', 'slot': 'END' },
  { 'name': 'The Falcon and the Winter Soldier', 'network': 'Disney+', 'link': 'https://www.disneyplus.com/series/the-falcon-and-the-winter-soldier/4gglDBMx8icA', 'image': 'FalconWinter', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'March 9, 2021', 'slot': 'END' },
  { 'name': 'Castlevania', 'network': 'Netflix', 'link': 'http://www.netflix.com/castlevania', 'image': 'Castlevania', 'type': 'gif', 'info': 'Streaming', 'season': 4, 'start': 'May 13, 2021', 'slot': 'END' },
  { 'name': 'Jupiters Legacy', 'network': 'Netflix', 'link': 'http://www.netflix.com/jupiterslegacy', 'image': 'JupitersLegacy', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'May 7, 2021', 'slot': 'END' },
  { 'name': 'Cursed', 'network': 'Netflix', 'link': 'http://www.netflix.com/cursed', 'image': 'Cursed', 'type': 'gif', 'info': 'Streaming', 'season': 1, 'start': 'July 17, 2020', 'slot': 'END' },
  { 'name': 'Lovecraft Country', 'network': 'HBOMax', 'link': 'https://www.hbo.com/lovecraft-country', 'image': 'LovecraftCountry', 'type': 'gif', 'info': 'Sundays 10:00PM', 'season': 1, 'start': 'August 16, 2020', 'slot': 'END' },
  { 'name': 'Supergirl', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/supergirl/', 'image': 'Supergirl', 'type': 'gif', 'info': 'Tuesdays 9:00PM', 'season': 6, 'start': 'March 30, 2021', 'slot': 'END' },
  { 'name': 'Staged', 'network': 'Hulu', 'link': 'http://www.hulu.com/series/staged/', 'image': 'Staged', 'type': 'gif', 'info': 'Streaming', 'season': 2, 'start': 'March 16, 2021', 'slot': 'END' },
  { 'name': 'F is for Family', 'network': 'Netflix', 'link': 'http://www.netflix.com/fisforfamily', 'image': 'FIsForFamily', 'type': 'gif', 'info': 'Streaming', 'season': 5, 'start': 'November 25, 2021', 'slot': 'END' },
  { 'name': 'Lost In Space', 'network': 'Netflix', 'link': 'http://www.netflix.com/lostinspace', 'image': 'LostInSpace', 'type': 'gif', 'info': 'Streaming', 'season': 3, 'start': 'December 1, 2021', 'slot': 'END' },
  { 'name': 'The Lost Symbol', 'network': 'Peacock', 'link': 'https://www.peacocktv.com/stream-tv/dan-browns-the-lost-symbol', 'image': 'TheLostSymbol', 'type': 'png', 'info': 'Streaming', 'season': 1, 'start': 'September 16, 2021', 'slot': 'END' },
  { 'name': 'Hawkeye', 'network': 'Disney+', 'link': 'https://www.disneyplus.com/series/hawkeye/11Zy8m9Dkj5l', 'image': 'Hawkeye', 'type': 'png', 'info': 'Streaming Wednesdays', 'season': 1, 'start': 'November 24, 2021', 'slot': 'END' },
  { 'name': 'The Expanse', 'network': 'Amazon', 'link': 'https://www.amazon.com/dp/B09LGJ5QNB', 'image': 'Expanse', 'type': 'gif', 'info': 'Streaming Thursdays', 'season': 6, 'start': 'December 10, 2021', 'slot': 'END' },
  { 'name': 'Dexter - New Blood', 'network': 'Showtime', 'link': 'https://www.sho.com/dexter-new-blood', 'image': 'DexterNewBlood', 'type': 'png', 'info': 'Sundays 10:00PM', 'start': 'November 7, 2021', 'slot': 'END' },
  { 'name': 'Book of Boba Fett', 'network': 'Disney+', 'link': 'https://disneyplusoriginals.disney.com/show/the-book-of-boba-fett', 'image': 'BookOfBobaFett', 'type': 'gif', 'info': 'Streaming Wednesdays', 'season': 1, 'start': 'December 29, 2021', 'slot': 'END' },
  { 'name': 'Batwoman', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/batwoman/', 'image': 'Batwoman', 'type': 'gif', 'info': 'Sundays 8:00PM', 'season': 2, 'start': 'January 17, 2021', 'slot': 'END' },
  { 'name': 'Space Force', 'network': 'Netflix', 'link': 'http://www.netflix.com/spaceforce', 'image': 'SpaceForce', 'type': 'gif', 'info': 'Streaming', 'season': 2, 'start': 'February 18, 2022', 'slot': 'END' },
  { 'name': 'Legends of Tomorrow', 'network': 'CW', 'link': 'http://www.cwtv.com/shows/dcs-legends-of-tomorrow/', 'image': 'LegendsOfTomorrow', 'type': 'gif', 'info': 'Wednesdays 8:00PM', 'season': 7, 'start': 'October 13, 2021', 'slot': 'END' },
  { 'name': 'Ozark', 'network': 'Netflix', 'link': 'http://www.netflix.com/ozark', 'image': 'Ozark', 'type': 'gif', 'info': 'Streaming', 'season': 4, 'start': 'January 21, 2022', 'slot': 'END' },
  { 'name': 'The Orville', 'network': 'Hulu', 'link': 'http://www.hulu.com/the-orville/', 'image': 'Orville3', 'type': 'png', 'info': 'Streaming Thursdays', 'season': 3, 'start': 'June 2, 2022', 'slot': 'END' },
  { 'name': 'Westworld', 'network': 'HBOMax', 'link': 'https://www.hbo.com/westworld', 'image': 'Westworld', 'type': 'gif', 'info': 'Sundays 9:00PM', 'season': 4, 'start': 'June 26, 2022', 'slot': 'END' },
  { 'name': 'Better Call Saul', 'network': 'AMC+', 'link': 'https://www.amcplus.com/shows/better-call-saul--1002228', 'image': 'BetterCallSaul', 'type': 'png', 'info': 'Mondays 10:00PM', 'season': 6, 'start': 'April 18, 2022', 'slot': 'END' },
  { 'name': 'Locke and Key', 'network': 'Netflix', 'link': 'http://www.netflix.com/locke&key', 'image': 'LockeAndKey', 'type': 'gif', 'info': 'Streaming', 'season': 3, 'start': 'August 10, 2022', 'slot': 'END' },
  { 'name': 'Archer', 'network': 'FXX', 'link': 'http://www.fxnetworks.com/shows/archer/', 'image': 'Archer', 'type': 'gif', 'info': 'Wednesdays 10:00PM', 'season': 13, 'start': 'August 24, 2022', 'slot': 'END' },
  { 'name': 'The Walking Dead', 'network': 'AMC+', 'link': 'https://www.amcplus.com/shows/the-walking-dead--1002293', 'image': 'WalkingDead', 'type': 'gif', 'info': 'Sundays 9:00PM', 'season': 11, 'start': 'August 22, 2021', 'slot': 'END' },
  { 'name': 'Paradise P.D.', 'network': 'Netflix', 'link': 'http://www.netflix.com/paradisepd', 'image': 'ParadisePD', 'type': 'gif', 'info': 'Streaming', 'season': 4, 'start': 'December 16, 2022', 'slot': 'END' },
  { 'name': 'His Dark Materials', 'network': 'HBOMax', 'link': 'https://www.hbo.com/his-dark-materials', 'image': 'HisDarkMaterials', 'type': 'gif', 'info': 'Mondays 9:00PM', 'season': 3, 'start': 'December 5, 2022', 'slot': 'END' }
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
