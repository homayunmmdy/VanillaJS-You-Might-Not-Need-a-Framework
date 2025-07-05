export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const style = document.createElement('style');
    this.root.appendChild(style)

    async function loadCSS() {
        const response = await fetch('/components/MenuPage.css');
        const css = await response.text();
        style.textContent = css
    }
    loadCSS();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}
customElements.define("menu-page", MenuPage);
