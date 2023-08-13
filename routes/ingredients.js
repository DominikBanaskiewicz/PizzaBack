var express = require("express");
var router = express.Router();
const ctrlIngredients = require("../controller/ingredientsController");

router.get("/", ctrlIngredients.get);

router.get("/:id", ctrlIngredients.getById);

module.exports = router;
