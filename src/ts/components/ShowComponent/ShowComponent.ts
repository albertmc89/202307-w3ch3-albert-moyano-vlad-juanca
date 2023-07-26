import Component from "../Component/Component";
import { type ShowStructure } from "../types/types";

class ShowComponent extends Component {
  show;

  constructor(
    parentElement: Element,
    tag: string,
    show: ShowStructure,
    className = ""
  ) {
    super(parentElement, "li", className);

    this.show = show;
  }

  render() {
    const scoreStar = `
      <li class="score__star">
        <button><i class="icon icon--score far fa-star" title=${this.show.score}/5></i></button>
      </li>`;

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
