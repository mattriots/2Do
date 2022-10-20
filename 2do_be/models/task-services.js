const mongoose = require("mongoose");
const userModel = require("./user");
const dotenv = require("dotenv")

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

async function getUsers(name, job) {
  let result;
  if (name === undefined && job === undefined) {
    result = await userModel.find();
  } else if (name && !job) {
    result = await findUserByName(name);
  } else if (job && !name) {
    result = await findUserByJob(job);
  } else {
    result = await findUserByNameAndJob(name, job);
  }
  return result;
}

async function findUserById(id) {
  try {
    console.log(id)
    return await userModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addUser(user) {
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteUser(id) {
  try {
    return await userModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function findUserByName(name) {
  return await userModel.find({ name: name });
}

async function findUserByJob(job) {
  return await userModel.find({ job: job });
}

async function findUserByNameAndJob(name, job) {
  return await userModel.find({ name: name, job: job });
}

exports.getUsers = getUsers;
exports.findUserById = findUserById;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
