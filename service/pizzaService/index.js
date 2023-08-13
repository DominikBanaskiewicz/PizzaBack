const Pizza = require("../schemas/pizza");

const getAllpizzas = async () => {
  return Pizza.find();
};

const getPizzaById = (id) => {
  return Pizza.findOne({ _id: id });
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
  getAllpizzas,
  getPizzaById,
};
