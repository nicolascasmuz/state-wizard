export function init() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerText = "Footer";
      this.style.fontFamily = "Roboto";
      this.style.fontSize = "22px";
      this.style.fontWeight = "500";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
      this.style.backgroundColor = "#FFA0EA";
      this.style.minWidth = "375px";
      this.style.minHeight = "233px";
    }
  }
  customElements.define("custom-footer", Footer);
}
