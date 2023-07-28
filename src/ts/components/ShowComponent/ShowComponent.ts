import Component from "../Component/Component.js";
import { type ShowStructure } from "../types/types";

class ShowComponent extends Component {
  show;

  constructor(parentElement: Element, show: ShowStructure, className = "") {
    const tag = "li";
    super(parentElement, tag, className);

    this.show = show;
  }

  render() {
    let scoreStar;
    this.parentElement.append(this.element);

    if (!this.show.isWatched) {
      scoreStar = `
      <li class="score__star">
        <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
      </li>
      <li class="score__star">
        <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
      </li>
      <li class="score__star">
        <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
      </li>
      <li class="score__star">
        <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
      </li>
      <li class="score__star">
        <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
      </li>
      `;
    } else {
      scoreStar = ``;
    }

    this.element.innerHTML = `
    <article class="serie">
      <img class="serie__poster"
        src=${this.show.poster}
        alt="${this.show.name} poster" />
      <h4 class="serie__title">${this.show.name}</h4>
      <span class="serie__info">${this.show.creator} (${this.show.year})</span>
      <ul class="score">
      ${scoreStar}
      </ul>
      <button><i class="icon icon--delete fas fa-times-circle"></i></button>
    </article>
    `;
  }
}

export default ShowComponent;
