const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    isCompleted: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2)
          throw new Error(
            "Invalid title, must be at least 2 characters."
          );
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
  },
  { collection: "tasks" }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;