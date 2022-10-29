const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2)
          throw new Error("Invalid title, must be at least 2 characters.");
      },
    },
    title: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2)
          throw new Error("Invalid title, must be at least 2 characters.");
      },
    },
    description: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2)
          throw new Error(
            "Invalid description, must be at least 2 characters."
          );
      },
    },
    //Research about making this a Date type
    dueDate: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "task_list" }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
