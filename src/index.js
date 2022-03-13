/* DO NOT MODIFY */
const rootElement = document.querySelector(".foods");

const foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco",
  },
  {
    id: 2,
    image: "🍔",
    name: "burger",
  },
  {
    id: 3,
    image: "🍆",
    name: "eggplant",
  },
  {
    id: 4,
    image: "🍎",
    name: "apple",
  },
  {
    id: 5,
    image: "🥞",
    name: "pancakes",
  },
];

class Foods {
  constructor(el, foodData) {
    this._root = el;
    this._data = foodData;
  }

  renderList() {
    this._root.addEventListener("click", (event) => {
      const { target } = event;
      target.remove();
    });

    const fragment = document.createDocumentFragment();

    this._data.forEach((i) => {
      fragment.appendChild(this.createFoodItem(i));
    });

    this._root.appendChild(fragment);
  }

  createFoodItem(item) {
    const itemEl = document.createElement("div");
    itemEl.innerText = item.image;
    itemEl.classList.add(item.name);

    return itemEl;
  }
}

const foods = new Foods(rootElement, foodData);

foods.renderList();
