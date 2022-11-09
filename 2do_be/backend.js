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

app.listen(process.env.PORT || port, () => {
  console.log("The mongoose is listening");
});

//Get users

app.get("/tasks", async (req, res) => {
  const status = req.query.status;
  const dueDate = req.query.dueDate;
  try {
    const result = await taskServices.getTasks(status, dueDate);
    res.send({ task_list: result });
    console.log(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/tasks/:id", async (req, res) => {
  const id = req.params["id"];
  console.log(id);
  let result = await taskServices.findTaskById(id);
  if (result === undefined || result.length == 0)
    res.status(404).send("Resource not found.");
  else {
    res.send({ task_list: result });
  }
});

app.post("/tasks", async (req, res) => {
  const task = req.body;
  const savedTask = await taskServices.addTask(task);
  if (savedTask) res.status(201).send(savedTask);
  else res.status(500).end();
});

app.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  let taskToDelete = await taskServices.deleteTask(id);
  if (taskToDelete === undefined || taskToDelete.length === 0)
    res.status(404).send("Resource not found.");
  else {
    res.status(204).end();
  }
});
