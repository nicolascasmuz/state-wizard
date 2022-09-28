export function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerText = "Header";
      this.style.fontFamily = "Roboto";
      this.style.fontSize = "22px";
      this.style.fontWeight = "500";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
      this.style.backgroundColor = "#FF8282";
      this.style.minWidth = "375px";
      this.style.minHeight = "60px";
    }
  }
  customElements.define("custom-header", Header);
}
