import { welcomePage } from "./pages/welcome/welcome";
import { formPage } from "./pages/form/form";

// GUARDA LAS RUTAS CON SUS RESPECTIVOS COMPONENTES
const routes = [
  {
    path: /\/welcome/,
    comp: welcomePage,
  },
  {
    path: /\/form/,
    comp: formPage,
  },
];

// INICIA EL ROUTER
export function initRouter(mainContainer: HTMLElement) {
  // GESTIONA LA RUTA DEL NAVEGADOR
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  // GESTIONA LAS RUTAS Y MONTA LOS COMPONENTES
  function handleRoute(testPath) {
    for (const r of routes) {
      if (r.path.test(testPath)) {
        const el = r.comp({ goTo: goTo });
        if (mainContainer.firstChild) {
          mainContainer.firstChild.remove();
        }
        mainContainer.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
