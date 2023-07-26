import Component from "../Component/Component.js";
class AppComponent extends Component {
  public title: string;
  public subtitle: string;

  constructor(parentElement: Element, tag: string, className = "") {
    super(parentElement, tag, (className = ""));
  }

  render() {
    this.parentElement.innerHTML = `
    <header class="main-header">
      <h1 class="main-title">${this.title}</h1>
    </header>
    <main class="main-content">
      <h2 class="main-content__title">${this.subtitle}</h2>
      <section class="list">
      </section >
    `;
  }
}

export default AppComponent;
