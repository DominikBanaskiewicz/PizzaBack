const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizza = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    img: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    ingredients: {
      type: Array,
      minlength: 3,
      maxlength: 170,
    },
  },
  { versionKey: false, timestamps: true }
);

const Pizza = mongoose.model("pizzas", pizza);

module.exports = Pizza;
