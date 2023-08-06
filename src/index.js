import "./style.css";
import { HomePage } from "./pages/HomePage";
import { RecipesPage } from "./pages/RecipesPage";

const appElm = document.querySelector("#app");

if (location.pathname === "/") {
  appElm.append(HomePage());
} else if (location.pathname === "/recepty") {
  appElm.append(RecipesPage());
}
