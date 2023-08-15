var express = require("express");
var router = express.Router();
const ctrlOperations = require("../controller/operationsController");

router.get("/", ctrlOperations.get);

router.get("/:id", ctrlOperations.getById);

router.post("/", ctrlOperations.addOperation);

router.delete("/", ctrlOperations.deleteOperation);

module.exports = router;
