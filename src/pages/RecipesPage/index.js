import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RecipeList } from "./RecipeList";

export const RecipesPage = () => {
  const element = document.createElement("div");
  element.classList.add("page");
  element.append(Header());
  element.innerHTML += `
    <main class="container"></main>
`;
  element.append(Footer());

  element.querySelector("main").append(RecipeList());
  return element;
};
