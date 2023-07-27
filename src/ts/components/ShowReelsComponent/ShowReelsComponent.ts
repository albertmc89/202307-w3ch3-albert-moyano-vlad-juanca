import Component from "../Component/Component.js";

class ShowReelComponent extends Component {
  constructor(
    parentElement: Element,
    private readonly titleReels: string,
    private readonly textCounter: string[],
    private readonly showsCount: number,
    className = "series"
  ) {
    const tag = "ul";
    super(parentElement, tag, className);
  }

  render() {
    let counterText;

    if (this.showsCount === 0) {
      counterText = `
      <span class="list__info">${this.textCounter[0]}</span>
      `;
    } else {
      counterText = `
      <span class="list__info">${
        this.textCounter[1] + `${this.showsCount}` + this.textCounter[2]
      }</span>
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
