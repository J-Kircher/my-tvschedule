// Shows.js
function TVshow ( name, network, link, image, info, status ) {
    this.name = name;
    this.network = network;
    this.link = link;
    this.image = image;
    this.info = info;
    this.status = status;
}

// S/M/T/W/R/F/A/N
// 8/9/X
// B = Between
// E = Ended

var showIndex = 0;
show = new Array();

show[showIndex++] = new TVshow ("Gotham", "FOX", "http://www.fox.com/gotham/", "Gotham2.gif", "Thursdays 8:00PM (Thursday, September 21)", "B");
show[showIndex++] = new TVshow ("Big Bang Theory", "CBS", "http://www.cbs.com/shows/big_bang_theory/", "BigBangTheory.gif", "Thursdays 8:00PM (Monday, September 25)", "B");
show[showIndex++] = new TVshow ("Criminal Minds", "CBS", "http://www.cbs.com/shows/criminal_minds/", "CriminalMinds.gif", "Wednesdays 10:00PM (Wednesday, September 27)", "B");
show[showIndex++] = new TVshow ("Supergirl", "CW", "http://www.cwtv.com/shows/supergirl/", "Supergirl.gif", "Mondays 8:00PM (Monday, October 9)", "B");
show[showIndex++] = new TVshow ("The Flash", "CW", "http://www.cwtv.com/shows/the-flash/", "TheFlash.gif", "Tuesdays 8:00PM (Tuesday, October 10)", "B");
show[showIndex++] = new TVshow ("Legends of Tomorrow", "CW", "http://www.cwtv.com/shows/dcs-legends-of-tomorrow/", "LegendsOfTomorrow.gif", "Tuesdays 9:00PM (Tuesday, October 10)", "B");
show[showIndex++] = new TVshow ("Supernatural", "CW", "http://www.cwtv.com/shows/supernatural/", "Supernatural11.gif", "Thursdays 8:00PM (Thursday, October 12)", "B");
show[showIndex++] = new TVshow ("Arrow", "CW", "http://www.cwtv.com/shows/arrow/", "Arrow.gif", "Thursdays 9:00PM (Thursday, October 12)", "B");
show[showIndex++] = new TVshow ("Star Wars Rebels", "DisneyXD", "http://www.starwars.com/tv-shows/star-wars-rebels", "Rebels.gif", "Mondays 9:00PM (Monday, October 16)", "B");
show[showIndex++] = new TVshow ("The Walking Dead", "AMC", "http://www.amctv.com/series/The-Walking-Dead/", "WalkingDead.gif", "Sundays 9:00PM (Sunday, October 22)", "B");
show[showIndex++] = new TVshow ("The Punisher", "Netflix", "http://www.netflix.com/punisher", "Punisher.gif", "Streaming (November 17)", "B");
show[showIndex++] = new TVshow ("Vikings", "History", "http://www.history.com/shows/vikings", "Vikings.gif", "Wednesdays 9:00PM (Wednesday, November 29)", "B");
show[showIndex++] = new TVshow ("The X-Files", "FOX", "http://www.fox.com/the-x-files/", "XFiles2016.gif", "Wednesdays 8:00PM (Wednesday, January 3)", "B");

show[showIndex++] = new TVshow ("Homeland", "Showtime", "http://www.sho.com/sho/homeland/home", "Homeland.gif", "Sundays 9:00PM (Sunday, February 11)", "B");
show[showIndex++] = new TVshow ("Ash vs Evil Dead", "Starz", "https://www.starz.com/series/ashvsevildead", "AshVsEvilDead.gif", "Sundays 9:00 PM (Sunday, February 25)", "B");
show[showIndex++] = new TVshow ("Jessica Jones", "Netflix", "http://www.netflix.com/jessicajones", "JessicaJones.gif", "Streaming (March 8)", "B");
show[showIndex++] = new TVshow ("Krypton", "Syfy", "http://www.syfy.com/krypton/", "Krypton.gif", "Wednesdays (Wednesday, March 21)", "B");
show[showIndex++] = new TVshow ("A Series of Unfortunate Events", "Netflix", "http://www.netflix.com/unfortunate", "Unfortunate.gif", "Streaming (March 30)", "B");
show[showIndex++] = new TVshow ("Elementary", "CBS", "http://www.cbs.com/shows/elementary/", "Elementary.gif", "Mondays 10:00PM (Monday, April 30)", "B");
show[showIndex++] = new TVshow ("", "", "", "", "Spacer", "B");

show[showIndex++] = new TVshow ("True Detective", "HBO", "http://www.hbo.com/true-detective/", "TrueDetective.gif", "Sundays 9:00PM (June 21)", "B");
show[showIndex++] = new TVshow ("Daredevil", "Netflix", "http://www.netflix.com/daredevil", "Daredevil2.gif", "Streaming (March 18)", "B");
show[showIndex++] = new TVshow ("Fugget About It", "Hulu", "http://www.hulu.com/fugget-about-it/", "FuggetAboutIt.gif", "Streaming (October 28)", "B");
show[showIndex++] = new TVshow ("Luke Cage", "Netflix", "http://www.netflix.com/lukecage", "LukeCage.gif", "Streaming (September 30)", "B");
show[showIndex++] = new TVshow ("Westworld", "HBO", "http://www.hbo.com/westworld/", "Westworld.gif", "Sundays 9:00PM (October 2)", "B");
show[showIndex++] = new TVshow ("White Rabbit Project", "Netflix", "http://www.netflix.com/whiterabbitproject", "WhiteRabbitProject.gif", "Streaming (December 9)", "B");
show[showIndex++] = new TVshow ("Taboo", "FX", "http://www.fxnetworks.com/shows/taboo/", "Taboo.gif", "Tuesdays 10:00PM (Tuesday, January 10)", "B");
show[showIndex++] = new TVshow ("The Expanse", "Syfy", "http://www.syfy.com/expanse/", "Expanse.gif", "Fridays", "B");
show[showIndex++] = new TVshow ("Iron Fist", "Netflix", "http://www.netflix.com/ironfist", "IronFist.gif", "Streaming (March 17)", "B");
show[showIndex++] = new TVshow ("Archer", "FXX", "http://www.fxnetworks.com/shows/archer/", "Archer.gif", "Wednesday 10:00PM (Wednesdays, April 5)", "B");
show[showIndex++] = new TVshow ("The Handmaid's Tale", "Hulu", "http://www.hulu.com/the-handmaids-tale/", "HandmaidsTale.gif", "Streaming (April 26)", "B");
show[showIndex++] = new TVshow ("American Gods", "Starz", "http://www.starz.com/americangods/", "AmericanGods.gif", "Sundays 9:00 PM (Sunday, April 30)", "B");
show[showIndex++] = new TVshow ("Better Call Saul", "AMC", "http://www.amctv.com/shows/better-call-saul/", "BetterCallSaul.gif", "Mondays 10:00PM (Monday, April 10)", "B");
show[showIndex++] = new TVshow ("House of Cards", "Netflix", "http://www.netflix.com/houseofcards", "HouseOfCards.gif", "Streaming (May 30)", "B");
show[showIndex++] = new TVshow ("Orange is the New Black", "Netflix", "http://www.netflix.com/orangeisthenewblack", "OrangeIsTheNewBlack.gif", "Streaming (June 9)", "B");
show[showIndex++] = new TVshow ("Silicon Valley", "HBO", "http://www.hbo.com/silicon-valley/", "SiliconValley.gif", "Sundays 10:00PM (April 23)", "B");
show[showIndex++] = new TVshow ("Doctor Who", "BBC", "http://www.bbcamerica.com/doctor-who/", "DoctorWho.gif", "Saturdays 9:00PM (Saturday, April 15)", "B");
show[showIndex++] = new TVshow ("The Defenders", "Netflix", "http://www.netflix.com/defenders", "Defenders.gif", "Streaming (August 18)", "B");
show[showIndex++] = new TVshow ("Game of Thrones", "HBO", "http://www.hbo.com/game-of-thrones/", "GameOfThrones.gif", "Sundays 9:00PM (July 16)", "B");
show[showIndex++] = new TVshow ("Rick and Morty", "AS", "http://www.adultswim.com/RickAndMorty", "RickAndMorty.gif", "Sundays (July 30)", "B");
show[showIndex++] = new TVshow ("Penn & Teller: Fool Us", "CW", "http://www.cwtv.com/shows/penn-teller-fool-us/", "PennTellerFoolUs.gif", "Thursdays 8:00PM (July 13)", "B");
show[showIndex++] = new TVshow ("Narcos", "Netflix", "http://www.netflix.com/narcos", "Narcos.gif", "Streaming (September 1)", "B");
show[showIndex++] = new TVshow ("Stranger Things", "Netflix", "http://www.netflix.com/strangerthings", "StrangerThings.gif", "Streaming (October 31)", "B");
show[showIndex++] = new TVshow ("Last Week Tonight", "HBO", "http://www.hbo.com/last-week-tonight-with-john-oliver/", "LastWeekTonight2.gif", "Sundays 11:00PM (February 14)", "B");
show[showIndex++] = new TVshow ("Real Housewives of Orange County", "Bravo", "http://www.bravotv.com/the-real-housewives-of-orange-county", "RealHousewivesOrangeCounty.gif", "Mondays 9:00PM (July 10)", "B");
show[showIndex++] = new TVshow ("American Horror Story", "FX", "http://www.fxnetworks.com/shows/american-horror-story/", "AmericanHorrorStory.gif", "Tuesdays 10:00PM (Tuesday, September 5)", "B");
show[showIndex++] = new TVshow ("The Shannara Chronicles", "Spike", "http://www.spike.com/shows/the-shannara-chronicles", "Shannara.gif", "Wednesdays 9:00PM (Wednesday, October 11)", "B");
show[showIndex++] = new TVshow ("The Orville", "FOX", "http://www.fox.com/the-orville/", "Orville.gif", "Thursdays 9:00PM (Sunday, September 10)", "B");
show[showIndex++] = new TVshow ("Survivor", "CBS", "http://www.cbs.com/shows/survivor/", "Survivor.gif", "Wednesdays 8:00PM (Wednesday, September 27)", "B");

show[showIndex++] = new TVshow ("Stargate Atlantis", "Syfy", "http://www.syfy.com/atlantis/", "StargateAtlantis.gif", "Ended January 9, 2009", "E");
show[showIndex++] = new TVshow ("Battlestar Galactica", "Syfy", "http://www.syfy.com/battlestar/", "BattlestarGalactica.gif", "Ended March 20, 2009", "E");
show[showIndex++] = new TVshow ("Sarah Connor Chronicles", "FOX", "http://www.fox.com/terminator/", "SarahConnorChronicles.gif", "Ended April 10, 2009", "E");
show[showIndex++] = new TVshow ("Numb3rs", "CBS", "http://www.cbs.com/shows/numb3rs/", "Numb3rs.gif", "Ended March 12, 2010", "E");
show[showIndex++] = new TVshow ("The Tudors", "Showtime", "http://www.sho.com/site/tudors/home.do", "Tudors.gif", "Ended June 20, 2010", "E");
show[showIndex++] = new TVshow ("Penn & Teller: Bullshit!", "Showtime", "http://www.sho.com/site/ptbs/", "PennTeller.gif", "Ended August 12, 2010", "E");
show[showIndex++] = new TVshow ("Caprica", "Syfy", "http://www.syfy.com/caprica/", "Caprica.gif", "Ended November 30, 2010", "E");
show[showIndex++] = new TVshow ("Lie to Me", "FOX", "http://www.fox.com/lietome/", "LieToMe.gif", "Ended January 31, 2011", "E");
show[showIndex++] = new TVshow ("Big Love", "HBO", "http://www.hbo.com/biglove/", "BigLove.gif", "Ended March 20, 1011", "E");
show[showIndex++] = new TVshow ("Stargate Universe", "Syfy", "http://www.syfy.com/universe/", "StargateUniverse.gif", "Ended May 9, 2011", "E");
show[showIndex++] = new TVshow ("Camelot", "Starz", "http://www.starz.com/originals/camelot/", "Camelot.gif", "Ended June 10, 2011", "E");
show[showIndex++] = new TVshow ("Rescue Me", "FX", "http://www.fxnetworks.com/rescueme/", "RescueMe.gif", "Ended September 7, 2011", "E");
show[showIndex++] = new TVshow ("Sanctuary", "Syfy", "http://www.syfy.com/sanctuary/", "Sanctuary.gif", "Ended December 30, 2011", "E");
show[showIndex++] = new TVshow ("House", "FOX", "http://www.fox.com/house/", "House.gif", "Ended May 21, 2012", "E");
show[showIndex++] = new TVshow ("The Firm", "NBC", "http://www.nbc.com/the-firm/", "TheFirm.gif", "Ended July 14, 2012", "E");
show[showIndex++] = new TVshow ("Alphas", "Syfy", "http://www.syfy.com/alphasseries/", "Alphas.gif", "Ended October 22, 2012", "E");
show[showIndex++] = new TVshow ("Jersey Shore", "MTV", "http://www.mtv.com/shows/jersey_shore/", "JerseyShore.gif", "Ended December 20, 2012", "E");
show[showIndex++] = new TVshow ("Fringe", "FOX", "http://www.fox.com/fringe/", "Fringe.gif", "Ended January 18, 2013", "E");
show[showIndex++] = new TVshow ("The Borgias", "Showtime", "http://www.sho.com/site/borgias/home.sho", "TheBorgias.gif", "Ended June 16, 2013", "E");
show[showIndex++] = new TVshow ("The Clone Wars", "CTN", "http://www.starwars.com/explore/the-clone-wars/", "CloneWars.gif", "Ended March 2, 2013", "E");
show[showIndex++] = new TVshow ("Dexter", "Showtime", "http://www.sho.com/site/dexter/", "Dexter.gif", "Ended September 22, 2013", "E");
show[showIndex++] = new TVshow ("Breaking Bad", "AMC", "http://www.amctv.com/shows/breaking-bad/", "BreakingBad.gif", "Ended September 29, 2013", "E");
show[showIndex++] = new TVshow ("Low Winter Sun", "AMC", "http://www.amctv.com/shows/low-winter-sun/", "LowWinterSun.gif", "Ended October 6, 2013", "E");
show[showIndex++] = new TVshow ("Warehouse 13", "Syfy", "http://www.syfy.com/warehouse13/", "Warehouse13.gif", "Ended May 19, 2014", "E");
show[showIndex++] = new TVshow ("Cosmos", "FOX", "http://www.cosmosontv.com/", "Cosmos.gif", "Ended June 8, 2014", "E");
show[showIndex++] = new TVshow ("True Blood", "HBO", "http://www.hbo.com/true-blood/", "TrueBlood.gif", "Ended August 24, 2014", "E");
show[showIndex++] = new TVshow ("Boardwalk Empire", "HBO", "http://www.hbo.com/boardwalk-empire/", "BoardwalkEmpire.gif", "Ended October 26, 2014", "E");
show[showIndex++] = new TVshow ("Sons of Anarchy", "FX", "http://www.fxnetworks.com/soa/", "SonsOfAnarchy.gif", "Ended December 9, 2014", "E");
show[showIndex++] = new TVshow ("Constantine", "NBC", "http://www.nbc.com/constantine/", "Constantine.gif", "Ended Friday, February 13, 2015", "E");
show[showIndex++] = new TVshow ("The Mentalist", "CBS", "http://www.cbs.com/shows/the_mentalist/", "TheMentalist.gif", "Ended Wednesday, February 18, 2015", "E");
show[showIndex++] = new TVshow ("Penn & Teller: Wizard Wars", "Syfy", "http://www.syfy.com/wizardwars/", "PennTellerWizardWars.gif", "Ended Thursday, March 12, 2015", "E");
show[showIndex++] = new TVshow ("Helix", "Syfy", "http://www.syfy.com/helix/", "Helix.gif", "Ended Friday, April 10, 2015", "E");
show[showIndex++] = new TVshow ("Justified", "FX", "http://www.fxnetworks.com/justified/", "Justified.gif", "Ended Tuesday, April 14, 2015", "E");
show[showIndex++] = new TVshow ("America's Got Talent", "NBC", "http://www.nbc.com/americas-got-talent/", "AmericasGotTalent.gif", "Tuesdays 8:00PM (May 26)", "E");
show[showIndex++] = new TVshow ("The Bastard Executioner", "FX", "http://www.fxnetworks.com/shows/the-bastard-executioner/", "BastardExecutioner.gif", "Ended Tuesday, November 17, 2015", "E");
show[showIndex++] = new TVshow ("The League", "FXX", "http://www.fxnetworks.com/shows/the-league/", "TheLeague.gif", "Ended Wednesday, December 2, 2015", "E");
show[showIndex++] = new TVshow ("Celebrity Apprentice", "NBC", "http://www.nbc.com/the-celebrity-apprentice", "CelebrityApprentice.gif", "Mondays 8:00PM (January 2)", "E");
show[showIndex++] = new TVshow ("Castle", "ABC", "http://abc.go.com/shows/castle", "Castle.gif", "Ended Monday, May 16, 2016", "E");
show[showIndex++] = new TVshow ("Penny Dreadful", "Showtime", "http://www.sho.com/sho/penny-dreadful/home", "PennyDreadful.gif", "Ended Sunday, June 19, 2016", "E");
show[showIndex++] = new TVshow ("Houdini and Doyle", "FOX", "http://www.fox.com/houdinianddoyle/", "HoudiniAndDoyle.gif", "Ended Monday, July 4, 2016)", "E");
show[showIndex++] = new TVshow ("Marco Polo", "Netflix", "http://www.netflix.com/marcopolo", "MarcoPolo.gif", "Cancelled December, 2016", "E");
show[showIndex++] = new TVshow ("Sleepy Hollow", "FOX", "http://www.fox.com/sleepy-hollow/", "SleepyHollow.gif", "Ended Friday, March 31, 2017)", "E");
show[showIndex++] = new TVshow ("Black Sails", "Starz", "http://www.starz.com/series/blacksails/", "BlackSails.gif", "Ended Sunday, April 2, 2017)", "E");
show[showIndex++] = new TVshow ("Broadchurch", "BBC", "http://www.bbcamerica.com/broadchurch/", "Broadchurch.gif", "Ended Wednesday, August 16 2017 (Wednesday, June 28)", "B");
