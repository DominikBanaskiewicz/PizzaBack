const express = require("express");
const router = express.Router();
const ctrlPizzas = require("../../controller/pizzasController");

router.get("/pizzas", ctrlPizzas.get);

router.get("/pizzas/:id", ctrlPizzas.getById);

module.exports = router;
