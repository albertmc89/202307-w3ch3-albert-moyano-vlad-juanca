import Component from "../Component/Component.js";
import { Shows } from "../types/types.js";

class ShowReelComponent extends Component {
  constructor(
    parentElement: Element,
    tag: string,
    className = "",
    private readonly titleReels: string,
    private readonly shows: Shows
  ) {
    tag = "ul";
    super(parentElement, "ul", className);
  }

  render() {
    const pendingSeriesCount = this.shows.filter(
      (show) => !show.isWatched
    ).length;

    let counterText;

    if (pendingSeriesCount === 0) {
      counterText = `
      <span class="list__info">Congrats! You've watched all your series</span>
      `;
    } else {
      counterText = `
      <span class="list__info">You have ${pendingSeriesCount} series pending to watch</span>
      `;
    }

    this.parentElement.innerHTML = `
      <h3 class="list__title">${this.titleReels}</h3>
      ${counterText}
    `;

    this.parentElement.append(this.element);
  }
}

export default ShowReelComponent;
