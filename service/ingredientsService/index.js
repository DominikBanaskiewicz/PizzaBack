const Ingredients = require("../schemas/ingredient");

const getAllingredients = async () => {
  return Ingredients.find();
};

const getIngredientById = (id) => {
  return Ingredients.findOne({ _id: id });
};

// const createPizza = ({ title, text }) => {
//   return Pizza.create({ title, text });
// };

// const updateTask = (id, fields) => {
//   return Task.findByIdAndUpdate({ _id: id }, fields, { new: true });
// };

// const removeTask = (id) => {
//   return Task.findByIdAndRemove({ _id: id });
// };

module.exports = {
  getAllingredients,
  getIngredientById,
};
