module.exports = function(pizzas) {
  if (!pizzas) {
    pizzas = [
      { crust: "thin crust",
        cheese: "mozzarella",
        toppings: "red peppers and onions" },
      { crust: "chicago deep dish",
        cheese: "so much cheeeesy",
        toppings: "all the vegetables in the world" },
      { crust: "wood fired",
        cheese: "fancy and delicious",
        toppings: "mushrooms, guanciale, taleggio, and porcini oil" }
    ];
  }

  function randomIndexValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return randomIndexValue(pizzas);
};
