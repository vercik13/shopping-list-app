import "./style.css";

export const ListItem = (props) => {
  const { day, item } = props;
  const { id, done, product, amount, unit } = item;

  let tickClass = "";
  if (done) {
    tickClass = " btn-tick--on";
  }

  const element = document.createElement("div");
  element.classList.add("list-item");
  element.classList.add("list-item--expanded");
  element.innerHTML = `
  
    <button class="icon-btn btn-tick${tickClass}"></button>
    <div class="list-item__body">
      <div class="list-item__product">${product}</div>
      <div class="list-item__amount">${amount} ${unit}</div>
    </div>
  `;

  const btnElm = element.querySelector(".icon-btn");
  btnElm.addEventListener("click", () => {
    fetch(`https://nakupy.kodim.app/api/me/week/${day}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        done: !done,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data),
          element.replaceWith(
            ListItem({
              day: day,
              item: data.result,
            })
          );
      });
  });

  return element;
};
