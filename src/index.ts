import { initRouter } from "./routes";
import { init as initHeader } from "./components/header/header";
import { init as initFooter } from "./components/footer/footer";
import { init as initH1Comp } from "./components/custom-h1/custom-h1";

(function () {
  initHeader();
  initFooter();
  initH1Comp();

  const mainContainer = document.querySelector(".main") as HTMLElement;
  initRouter(mainContainer);
})();
