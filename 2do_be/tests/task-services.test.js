const taskServices = require("../models/task-services");


test("Get all tasks", () => {
  const target = 0;
  const result = taskServices.getTasks();
  expect(result).toBeDefined();
});