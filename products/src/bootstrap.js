import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// Running this file in development in isolation
// Using local index.html file
// Definitely has an element with an id of 'dev-products'
// immediately render the app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // assuming our container does not have an element with id of 'dev-products'
  if (el) {
    // probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// running this file in development or production
// through the container app
// no guarantee that an element with an id of 'dev-products'
// do not want to try to immediately render the app
export { mount };
