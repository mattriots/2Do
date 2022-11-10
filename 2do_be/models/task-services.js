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
  )
  .catch((error) => console.log(error));

async function getTasks(status, dueDate) {
  let result;
  if (status === undefined && dueDate === undefined) {
    result = await taskModel.find();
  } else if (status && !dueDate) {
    result = await findTaskByStatus(status); //Returns just tasks with certain status: Complete, in progress?
  } else if (!status && dueDate) {
    result = await findTaskByDueDate(dueDate);
  } else {
    result = await findTaskByStatusAndDueDate(status, dueDate);
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
  try {
    let result;
    result = await taskModel.findByIdAndDelete(id);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

//Need to fix this up to align with our new approach of updating all fields
//when updating any field in the task

async function updateTask(id, status, title, description, dueDate) {
  try {
    const filter = { id: id };
    console.log(filter);
    // const update = new taskModel(status, title, description, dueDate);
    // console.log(update);
    let updatedTask = await taskModel.findByIdAndUpdate(id, {status});
    return updatedTask;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findTaskById(id) {
  try {
    return await taskModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function findTaskByStatus(status) {
  return await taskModel.find({ status: status });
}

async function findTaskByDueDate(dueDate) {
  return await taskModel.find({ dueDate: dueDate });
}

async function findTaskByStatusAndDueDate(status, dueDate) {
  return await taskModel.find({ status: status, dueDate: dueDate });
}

exports.getTasks = getTasks;
exports.addTask = addTask;
exports.deleteTask = deleteTask;
exports.findTaskById = findTaskById;
exports.findTaskByStatus = findTaskByStatus;
exports.findTaskByDueDate = findTaskByDueDate;
exports.findTaskByStatusAndDueDate = findTaskByStatusAndDueDate;
exports.updateTask = updateTask;
