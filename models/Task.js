const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  martianID: { type: String, required: true },
  title: { type: String, required: true },
  textBody: String,
  isComplete: {type: Boolean, default: false},
  date: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
