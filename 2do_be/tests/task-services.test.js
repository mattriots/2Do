const mongoose = require("mongoose");
const taskModel = require("../models/task");
const taskServices = require("../models/task-services");

taskId = 0;

beforeAll(async () => {});

afterAll(async () => {});

// beforeEach(async () => {

//   dummyTask = {
//     status: "in progress",
//     title: "read a book",
//     description: "Reading Huck Finn",
//     dueDate: "12/01/2022",
//   };
//   result = new taskModel(dummyTask);
//   await result.save();
//   dummyTask = {
//     status: "in progress",
//     title: "go on a run",
//     description: "try to run 16 miles man, come on you can do it",
//     dueDate: "12/03/2022",
//   };
//   result = new taskModel(dummyTask);
//   await result.save();

//   dummyTask = {
//     status: "complete",
//     title: "finish up 453",
//     description: "This project is gonna be a big one",
//     dueDate: "12/04/2022",
//   };
//   result = new taskModel(dummyTask);
//   await result.save();

//   dummyTask = {
//     status: "complete",
//     title: "get yelled at by my kid",
//     description: "FINISH YOUR WORK MATT",
//     dueDate: "12/05/2022",
//   };
//   result = new taskModel(dummyTask);
//   await result.save();

//   dummyTask = {
//     status: "complete",
//     title: "finish up shopify",
//     description: "Get paid",
//     dueDate: "12/06/2022",
//   };
//   result = new taskModel(dummyTask);
//   await result.save();
// });

// afterEach(async () => {
//   await taskModel.deleteMany();
// });

test("Get all tasks", async () => {
  const tasks = await taskServices.getTasks();
  expect(tasks).toBeDefined();
  expect(tasks.length).toBeGreaterThan(0);
});

test("Add task", async () => {
  let dummyTask = {
    status: "in progress",
    title: "setting up jest",
    description:
      "Using mongodb memory server to test all our functions on the backend",
    dueDate: "12/02/2022",
  };
  const result = await taskServices.addTask(dummyTask);
  expect(result).toBeTruthy();
  expect(result.status).toBe(dummyTask.status);
  expect(result.title).toBe(dummyTask.title);
  expect(result.description).toBe(dummyTask.description);
  expect(result.dueDate).toBe(dummyTask.dueDate);
  expect(result).toHaveProperty("_id");
  taskId = result.id;
});

test("Get tasks by status", async () => {
  const status = "in progress";
  const tasks = await taskServices.getTasks(status);
  expect(tasks).toBeDefined();
  expect(tasks.length).toBeGreaterThan(0);
  tasks.forEach((task) => expect(task.status).toBe(status));
});

test("Get tasks by dueDate", async () => {
  const dueDate = "12/02/2022";
  const tasks = await taskServices.getTasks(undefined, dueDate);
  expect(tasks).toBeDefined();
  expect(tasks.length).toBeGreaterThan(0);
  tasks.forEach((task) => expect(task.dueDate).toBe(dueDate));
});

test("Delete Task by Id", async () => {
  const deleteResult = await taskServices.deleteTask(taskId);
  expect(deleteResult).toBeTruthy();
});
