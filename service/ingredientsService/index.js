const Ingredients = require("../schemas/ingredient");

const getAllingredients = async () => {
  return Ingredients.find();
};

const getIngredientById = (id) => {
  return Ingredients.findOne({ _id: id });
};

const createIngredient = (name, img) => {
  console.log(name, img);
  return Ingredients.create({ name: name, img: img });
};

const removeIngredient = (id) => {
  return Ingredients.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAllingredients,
  getIngredientById,
  removeIngredient,
  createIngredient,
};
