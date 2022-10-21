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
    category: {
      type: String,
      default: "All",  //Does this work? Default all category is all...then we can adjust/implement from there
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
