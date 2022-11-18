const mongoose = require("mongoose");
const taskModel = require("./task");
const dotenv = require("dotenv");

dotenv.config({
  path: "../.env",
});

mongoose.set("debug", true);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/users"
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

async function getTasks(status, dueDate) {
  let result;
  if (status === undefined && dueDate === undefined) {
    result = await taskModel.find().sort({ status: -1, dueDate: 1 });
  } else if (status && !dueDate) {
    result = await findTaskByStatus(status);
  } else if (!status && dueDate) {
    result = await findTaskByDueDate(dueDate);
  }
  return result;
}

async function addTask(status, title, desc, dueDate) {
  try {
    const taskToAdd = new taskModel(status, title, desc, dueDate);
    const savedTask = await taskToAdd.save();
    return savedTask;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteTask(id) {
  return await taskModel.findByIdAndDelete(id);
}

async function updateTask(id, body) {
  return await taskModel.findByIdAndUpdate(id, body);
}

async function findTaskById(id) {
  return await taskModel.findById(id);
}

async function findTaskByStatus(status) {
  return await taskModel.find({ status: status }).sort({ dueDate: 1 });
}

async function findTaskByDueDate(dueDate) {
  return await taskModel.find({ dueDate: dueDate }).sort({ dueDate: 1 });
}

exports.getTasks = getTasks;
exports.addTask = addTask;
exports.deleteTask = deleteTask;
exports.findTaskById = findTaskById;
exports.findTaskByStatus = findTaskByStatus;
exports.findTaskByDueDate = findTaskByDueDate;
exports.updateTask = updateTask;
