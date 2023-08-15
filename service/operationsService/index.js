const Operations = require("../schemas/operation");

const getAllOperations = async () => {
  return Operations.find();
};

const getAddOperations = async (operationtype) => {
  return Operations.find({ operationType: operationtype });
};

const getOperationById = (id) => {
  return Operations.findOne({ _id: id });
};

const getOperationsForPizza = (isOperationForPizza) => {
  if (isOperationForPizza) {
    return Operations.find({ isPizzaOperation: isOperationForPizza });
  }
  if (!isOperationForPizza) {
    return Operations.find({ isPizzaOperation: isOperationForPizza });
  }
};

const addOperation = (isOperationForPizza, operationType, name) => {
  return Operations.create({
    operationType: operationType,
    isPizzaOperation: isOperationForPizza,
    name: name,
  });
};
const removeOperation = (id) => {
  console.log(id);
  return Operations.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAllOperations,
  getOperationById,
  getOperationsForPizza,
  addOperation,
  removeOperation,
  getAddOperations,
};
