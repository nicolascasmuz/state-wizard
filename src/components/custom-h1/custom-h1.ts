import { state } from "../../state";

export function init() {
  class CustomH1 extends HTMLElement {
    nombre: string;
    constructor() {
      super();
      state.subscribe(() => {
        this.syncWithState();
      });
      this.syncWithState();
    }
    syncWithState() {
      const lastState = state.getState();
      this.nombre = lastState.nombre || "";
      this.render();
    }
    render() {
      this.textContent = "Hola " + this.nombre;
      this.style.display = "block";
      this.style.fontFamily = "Roboto";
      this.style.fontSize = "52px";
      this.style.fontWeight = "700";
      this.style.color = "black";
    }
  }
  customElements.define("custom-h1", CustomH1);
}
