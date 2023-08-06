import { ShopList } from "./ShopList";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./style.css";

export const HomePage = () => {
  const element = document.createElement("div");
  element.classList.add("page");
  element.append(Header());
  element.innerHTML += `
    <main class="container"></main>
`;
  element.append(Footer());

  element
    .querySelector("main")
    .append(
      ShopList({ day: "mon", dayResult: "loading" }),
      ShopList({ day: "tue", dayResult: "loading" })
    );
  return element;
};
