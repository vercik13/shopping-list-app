//import { getRecipesItemsById, updateRecipesItem } from "../../../functions/db";

export const RecipeItem = (props) => {
  const { name, ingrediens, progress } = props;

  const element = document.createElement("div");
  element.classList.add("list-item");
  element.innerHTML = `

    <div class="list-item__body">
      <div class="list-item__product">${name}</div>
    </div>
    <div class="list-item__body">
      <div class="list-item__product">${ingrediens}</div>
    </div>
    <div class="list-item__body">
      <div class="list-item__product">${progress}</div>
    </div>
  `;

  // const handleTick = () => {
  //   updateRecipesItem(id, !done).then((response) => {
  //     getRecipesItemsById(id).then((response) => {
  //       const { data } = response;
  //       element.replaceWith(RecipeItem(data));
  //     });
  //   });
  // };
  return element;
};
