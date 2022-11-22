const mongoose = require("mongoose");
const taskModel = require("../models/task");
const taskServices = require("../models/task-services");

taskId = 0;

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

test("Add task --fail", async () => {
  let dummyTask = {
    _id: "1223422",
    status: "in progress",
    title: "setting up jest",
    description:
      "Using mongodb memory server to test all our functions on the backend",
    dueDate: "12/02/2022",
  };
  const result = await taskServices.addTask(dummyTask);
  expect(result).toBeFalsy();
});

test("Add task --fail too short", async () => {
  let dummyTask = {
    status: "i",
    title: "k",
    description:
      "p",
    dueDate: "12/02/2022",
  };
  const result = await taskServices.addTask(dummyTask);
  expect(result).toBeFalsy();
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

test("Get tasks by Id", async () => {
  const task = await taskServices.findTaskById(taskId);
  expect(task).toBeDefined();
  expect(task).toBeTruthy();
});

test("Update task", async () => {
   let dummyUpdate = {
     status: "completed",
   };
  const deleteResult = await taskServices.updateTask(taskId, dummyUpdate);
  expect(deleteResult).toBeDefined();
});

test("Delete Task by Id", async () => {
  const deleteResult = await taskServices.deleteTask(taskId);
  expect(deleteResult).toBeTruthy();
});

test("Delete Task by Id --fail", async () => {
  const deleteResult = await taskServices.deleteTask(taskId);
  expect(deleteResult).toBeFalsy();
  expect(deleteResult).toBeNull();
});