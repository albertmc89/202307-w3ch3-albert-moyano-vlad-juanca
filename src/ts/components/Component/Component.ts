abstract class Component {
  element: Element;

  constructor(parentElement: Element, tag: string, className = "") {
    this.element = document.createElement(tag);
    this.element.className = className;

    parentElement.append(this.element);
  }

  abstract render(): void;
}

export default Component;
