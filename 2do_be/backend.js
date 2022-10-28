const { application, response } = require("express");
const express = require("express");
const taskServices = require("./models/task-services");
const app = express();
const port = 5001;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Yall!");
});

app.listen(port, () => {
  console.log(`The mongoose is listening at http://localhost:${port}`);
});

//Get users

app.get("/tasks", async (req, res) => {
  const status = req.query.status;
  const title = req.query.title;
  const description = req.query.description;
  const dueDate = req.query.dueDate;
  try {
    const result = await taskServices.getTasks(status, title, description, dueDate);
    res.send({ tasks: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/users/:id", async (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = await taskServices.findUserById(id);
  if (result === undefined || result.length == 0)
    res.status(404).send("Resource not found.");
  else {
    res.send({ users_list: result });
  }
});

app.post("/Tasks", async (req, res) => {
  const task = req.body;
  const savedTask = await taskServices.addTask(task);
  if (savedTask) res.status(201).send(savedTask);
  else res.status(500).end();
});

app.delete("/Tasks/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  let taskToDelete = await taskServices.deleteTask(id);
  if (taskToDelete === undefined || taskToDelete.length === 0)
    res.status(404).send("Resource not found.");
  else {
    res.status(204).end();
  }
});

// const findUserByName = (name) => {
//   return users["users_list"].filter((user) => user["name"] === name);
// };

// const findUserByNameAndJob = (name, job) => {
//   return users["users_list"].filter(
//     (user) => user["name"] === name && user["job"] === job
//   );
// };

// function findUserById(id) {
//   return users["users_list"].find((user) => user["id"] === id);
// }

//Add user

