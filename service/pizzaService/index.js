const Pizza = require("../schemas/pizza");

const getAllpizzas = async () => {
  return Pizza.find();
};

const getPizzaById = (id) => {
  return Pizza.findOne({ _id: id });
};

const createPizza = async (nazwa, skladniki, img) => {
  return Pizza.create({ name: nazwa, ingredients: skladniki, img: img });
};

const removePizza = (id) => {
  return Task.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAllpizzas,
  getPizzaById,
  createPizza,
  removePizza,
};
