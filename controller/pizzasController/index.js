const service = require("../../service/pizzaService");

const get = async (req, res, next) => {
  try {
    const results = await service.getAllpizzas();
    res.json({
      status: "success",
      code: 200,
      data: {
        data: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getPizzaById(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { data: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found pizza with id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};
const addPizza = async (req, res, next) => {
  const nazwa = req.body.name;
  const skladniki = req.body.skladniki.split(",");
  const img = req.body.img;

  try {
    const result = await service.createPizza(nazwa, skladniki, img);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { data: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found pizza : ${nazwa}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};
const removePizza = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.removePizza(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { deletedContact: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found pizza with id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  get,
  getById,
  addPizza,
  removePizza,
};
