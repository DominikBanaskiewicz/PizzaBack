const express = require("express");
const router = express.Router();
const ctrlTask = require("../controller/pizzasController");

router.get("/tasks", ctrlTask.get);

router.get("/tasks/:id", ctrlTask.getById);

module.exports = router;
