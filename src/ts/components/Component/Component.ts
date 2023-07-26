abstract class Component {
  element: Element;

  constructor(
    protected parentElement: Element,
    public tag: string,
    public className = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  abstract render(): void;
}

export default Component;
