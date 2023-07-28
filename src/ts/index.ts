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
const pendingShowsCount = pendingShows.length;
const mainElement = document.querySelector(".main-content")!;
const sectionElement1 = document.createElement("section");
sectionElement1.classList.add(".list");
mainElement.append(sectionElement1);
const textCounter1 = [
  "Congrats! You've watched all your series",
  "You have ",
  " pending to watch.",
];

const titleReels1 = "Pending series";

const showReelComponentPending = new ShowReelComponent(
  sectionElement1,
  titleReels1,
  textCounter1,
  pendingShowsCount
);
showReelComponentPending.render();

const listElement1 = document.querySelector(".series")!;

const showComponents: ShowComponent[] = [];
pendingShows.forEach((show) => {
  const showComponent = new ShowComponent(listElement1, show);
  showComponent.render();
  showComponents.push(showComponent);
});

showComponents.forEach((showComponent) => {
  const starsButtonElements =
    showComponent.element.querySelectorAll(".score__star");

  starsButtonElements.forEach((starButtonElement) => {
    starButtonElement.addEventListener("click", () => {
      const iconElement: HTMLElement =
        starButtonElement.querySelector(".icon")!;
      const numberStarsRanking = Number(iconElement.title[0]);
      listElement2.append(showComponent.element);
    });
  });
});

const watchedShows = shows.filter((show) => show.isWatched);
const watchedShowsCount = watchedShows.length;
const sectionElement2 = document.createElement("section");
sectionElement2.classList.add(".list");
mainElement.append(sectionElement2);
const textCounter2 = [
  "You have not watched any series yet",
  "You have watched ",
  " series",
];
const titleReels2 = "Watched series";
const showReelComponentWatched = new ShowReelComponent(
  sectionElement2,
  titleReels2,
  textCounter2,
  watchedShowsCount
);
showReelComponentWatched.render();

const listElement2 = document.querySelectorAll(".series")[1]!;

const watchedShowsElements = [];
watchedShows.forEach((show) => {
  const showComponent = new ShowComponent(listElement2, show);
  showComponent.render();
  watchedShowsElements.push(showComponent);
});
