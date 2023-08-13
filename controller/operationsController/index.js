const service = require("../../service/operationsService");

const get = async (req, res, next) => {
  const { operationtype } = req.query;
  if (!operationtype) {
    try {
      const results = await service.getAllOperations();
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
  } else {
    try {
      const results = await service.getAddOperations(operationtype);
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
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getOperationById(id);
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
        message: `Not found task id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const addOperation = async (req, res, next) => {
  const { isOperationForPizza, operationType, name } = req.query;

  try {
    const result = await service.addOperation(
      isOperationForPizza,
      operationType,
      name
    );
    res.status(201).json({
      status: "success",
      code: 201,
      data: { addedOperation: result },
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  get,
  getById,
  addOperation,
};
