const mongoose = require("mongoose");
const taskModel = require("./task");
const dotenv = require("dotenv")




// READ THISSSSSSSS ///
//Working through transfering this over to tasks
// NEed to connect it to backend.js and make sure that is all transfered over too
// THEN we can try to connect to database

dotenv.config({
  path: "/home/martog/code/learning/school/CSC307/2Do/.env",
});

mongoose.set("debug", true);

mongoose
  .connect("mongodb+srv://" 
        + process.env.MONGO_USER +
        ":" +
        process.env.MONGO_PWD +
        "@"+
        process.env.MONGO_CLUSTER +
        "/"+
        process.env.MONGO_DB +
        "?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/users"
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

async function getTasks(id, title) {
  let result;
  if (id  === undefined && title === undefined) {
    result = await taskModel.find();
  } else if (id && !title) {
    result = await findUserByName(name);
  } else if (job && !name) {
    result = await findUserByJob(job);
  } else {
    result = await findUserByNameAndJob(name, job);
  }
  return result;
}

async function findTaskById(id) {
  try {
    console.log(id)
    return await taskModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addTask(title, desc) {
  try {
    const taskToAdd = new taskModel(title, desc);
    const savedTask = await taskToAdd.save();
    return savedTask;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteTask(id) {
  try {
    return await taskModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function findtaskbyIsCompleted(isCompleted) {
  return await taskModel.find({ isCompleted: isCompleted });
}

// async function findUserByName(name) {
//   return await userModel.find({ name: name });
// }

// async function findUserByJob(job) {
//   return await userModel.find({ job: job });
// }

// async function findUserByNameAndJob(name, job) {
//   return await userModel.find({ name: name, job: job });
// }

exports.getTasks = getTasks;
exports.findTaskById = findTaskById;
exports.addTask = addTask;
exports.deleteTask = deleteTask;
