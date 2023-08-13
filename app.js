const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const pizzaRouter = require("./routes/pizzas");
const ingredientRouter = require("./routes/ingredients");
const operationRouter = require("./routes/operations");

const app = express();

// parse application/json
app.use(express.json());
// cors
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/pizzas", pizzaRouter);
app.use("/ingredients", ingredientRouter);
app.use("/operations", operationRouter);

// catch 404 and forward to error handler

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /pizzas. /ingredients",
    data: "Not found",
  });
});

app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3001;
const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(
  "",
  {
    useUnifiedTopology: true,
    dbName: "Pizza",
  }
);
console.log(uriDb);
connection
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );

module.exports = app;
