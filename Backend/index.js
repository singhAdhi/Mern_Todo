const express = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
app.use(cors());

app.use(express.json());

app.get("/todo", async (req, res) => {
  const todos = await todo.find();
  res.json({ todos });
});

app.post("/todos/post", async (req, res) => {
  const userInput = req.body;
  const zodData = createTodo.safeParse(userInput); //to validate using zod

  if (!zodData.success) {
    return res.json({
      ret: "data is not correct",
    });
  }
  await todo.create({
    title: userInput.title,
    description: userInput.description,
    completed: false,
  });
  res.json({
    ret: "data is correct",
  });
});

app.put("/todos/put", (req, res) => {
  const userInput = req.body;
  const zodData = updateTodo.safeParse(userInput);

  if (!zodData.success) {
    return res.json({
      ret: "data is not correct",
    });
  }

  res.json({
    ret: "data is correct",
  });
});

app.delete("/todos/delete", (req, res) => {
  res.json({
    data: "delete",
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
