import { RecipeItem } from "../RecipeItem";
import { getRecipesItems } from "../../../functions/db";
import { addRecipesItem } from "../../../functions/db";

export const RecipeList = () => {
  const element = document.createElement("div");
  element.classList.add("shoplist");
  element.innerHTML = `
    <for class="shoplist__new">
      <div class="form-fields">  
        <input class="field-input product-input" type="text" />
        <input class="field-input amount-input" type="text" />
        <input class="field-input unit-input" type="text" />
      </div>
      <div class="form-controls">
        <button class="btn-add">Přidat</button>
      </div>
    </for
    <div class="shoplist__items"></div>
  `;

  const itemsElm = element.querySelector(".shoplist__items");
  getRecipesItems().then((response) => {
    const { data } = response;
    element.append(
      ...data.map((item) =>
        RecipeItem({
          name: item.name,
          ingrediens: item.ingrediens,
          progress: item.progress,
        })
      )
    );
  });

  return element;
};
