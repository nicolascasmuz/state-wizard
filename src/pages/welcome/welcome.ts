import { state } from "../../state";

export function welcomePage(goToFunction) {
  // CREA LA PÁGINA WELCOME
  const addEl = document.createElement("div");
  addEl.innerHTML = `
  <section class="section-welcome">
    <h1 class="section-welcome__title">Te damos la bienvenida a esta página</h1>
    <h3 class="section-welcome__subtitle">Para continuar ingresá tu nombre</h3>
    <form class="section-welcome__form">
      <label class="form__label">
        Nombre
        <input class="form__input" name="name" type="text" placeholder="ingresá tu nombre" /input>
      </label>
      <button class="form__button">Comenzar</button>
    </form>
  </section>
  `;

  // RUTEA LA PÁGINA Y SETEA EL STATE
  const formEl = addEl.querySelector(".section-welcome__form") as HTMLElement;

  formEl.addEventListener("submit", (e: any) => {
    e.preventDefault();
    goToFunction.goTo("/form");
    state.setState({
      ...state.getState(),
      nombre: e.target.name.value,
    });
  });

  return addEl;
}
