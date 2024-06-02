const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://adhirajsingh7303:006UlDmRU2djogSB@cluster0.m7wute1.mongodb.net/"
);

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model("todos", TodoSchema);

module.exports = {
  todo,
};
