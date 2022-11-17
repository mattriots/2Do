const taskServices = require("../models/task-services");


test(("Get all tasks"), async () => {
  const target = 0;
  const result = await taskServices.getTasks();
  expect(result).toBeDefined();
});