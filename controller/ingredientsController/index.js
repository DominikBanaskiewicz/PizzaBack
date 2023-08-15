const service = require("../../service/ingredientsService");

const get = async (req, res, next) => {
  try {
    const results = await service.getAllingredients();
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
    const result = await service.getIngredientById(id);
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
        message: `Not found ingredient with id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const addIngredient = async (req, res, next) => {
  const name = req.body.name;
  const img = req.body.img;
  console.log(name, img);

  try {
    const result = await service.createIngredient(name, img);
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
        message: `Not found ingredient with id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};
const removeIngredient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.removeIngredient(id);
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
        message: `Not found ingredient with id: ${id}`,
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
  addIngredient,
  removeIngredient,
};
