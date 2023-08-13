var express = require("express");
var router = express.Router();
const ctrlPizzas = require("../controller/pizzasController");

router.get("/", ctrlPizzas.get);

router.get("/:id", ctrlPizzas.getById);

module.exports = router;
