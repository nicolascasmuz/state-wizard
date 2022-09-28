export function formPage(goToFunction) {
  // CREA LA PÁGINA FORM
  const addEl = document.createElement("div");
  addEl.innerHTML = `
  <section class="section-form">
    <custom-h1 class="step1-title"></custom-h1>
    <h3 class="section-form__subtitle">Necesitamos algunos datos más</h3>
    <div class="section-form__form-container">
        <label>
            Email
            <input type="text" />
        </label>
        <label>
            Comida favorita
            <input type="text" />
        </label>
        <label class="label">
        Alguna de estas tres opciones
        <select>
            <option>Piedra</option>
            <option>Papel</option>
            <option>Tijera</option>
        </select>
        </label>
        <button class="button-enviar">Enviar</button>
    </div>
    <button class="button-volver">Volver</button>
  </section>
  `;

  // RUTEA LA PÁGINA
  const buttonVolver = addEl.querySelector(".button-volver") as HTMLElement;

  buttonVolver.addEventListener("click", () => {
    goToFunction.goTo("/welcome");
  });

  return addEl;
}
