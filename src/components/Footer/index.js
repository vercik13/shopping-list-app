import "./style.css";

export const Footer = () => {
  const element = document.createElement("footer");
  element.innerHTML = `
  <div class="container">
    <p class="footer__text">Javascript App</p>
  </div>
  `;
  return element;
};
