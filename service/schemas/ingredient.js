const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredient = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    pizzas: {
      type: Array,
      minlength: 3,
      maxlength: 170,
    },
  },
  { versionKey: false, timestamps: true }
);

const Ingredient = mongoose.model("ingredientsCollection", ingredient);

module.exports = Ingredient;
