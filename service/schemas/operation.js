const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operation = new Schema(
  {
    operationType: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    isPizzaOperation: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    name: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
  },
  { versionKey: false, timestamps: true }
);

const Operation = mongoose.model("operationsCollection", operation);

module.exports = Operation;
