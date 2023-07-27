import AppComponent from "./components/AppComponent/AppComponent.js";
import ShowComponent from "./components/ShowComponent/ShowComponent.js";
import ShowReelComponent from "./components/ShowReelsComponent/ShowReelsComponent.js";
import shows from "./data/data.js";
const containerElement = document.querySelector(".container")!;

const appComponent = new AppComponent(
  containerElement,
  "div",
  "My Series",
  "Series List"
);
appComponent.render();

const pendingShows = shows.filter((show) => !show.isWatched);
const mainElement = document.querySelector(".main-content")!;
const sectionElement1 = document.createElement("section");
sectionElement1.classList.add(".list");
mainElement.append(sectionElement1);

const showReelComponentPending = new ShowReelComponent(
  sectionElement1,
  "ul",
  "series",
  "Pending series",
  pendingShows
);
showReelComponentPending.render();

const listElement1 = document.querySelector(".series")!;

const showComponent1 = new ShowComponent(listElement1, "li", pendingShows[0]);
showComponent1.render();

const showComponent2 = new ShowComponent(listElement1, "li", pendingShows[1]);
showComponent2.render();

const watchedShows = shows.filter((show) => show.isWatched);
const sectionElement2 = document.createElement("section");
sectionElement2.classList.add(".list");
mainElement.append(sectionElement2);

const showReelComponentWatched = new ShowReelComponent(
  sectionElement2,
  "ul",
  "series",
  "Watched series",
  watchedShows
);
showReelComponentWatched.render();

const listElement2 = document.querySelectorAll(".series")[1]!;

const showComponent3 = new ShowComponent(listElement2, "li", watchedShows[0]);
showComponent3.render();

const showComponent4 = new ShowComponent(listElement2, "li", watchedShows[1]);
showComponent4.render();
