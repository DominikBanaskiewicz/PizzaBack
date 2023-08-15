var express = require("express");
var router = express.Router();
const ctrlPizzas = require("../controller/pizzasController");

router.get("/", ctrlPizzas.get);

router.get("/:id", ctrlPizzas.getById);

router.post("/", ctrlPizzas.addPizza);

router.delete("/:id", ctrlPizzas.removePizza);

module.exports = router;
