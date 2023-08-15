const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredient = new Schema(
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
  },
  { versionKey: false, timestamps: true }
);

const Ingredient = mongoose.model("ingredientsCollection", ingredient);

module.exports = Ingredient;
