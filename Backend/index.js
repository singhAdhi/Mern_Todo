const express = require("express");
const app = express();

app.use(express.json());
app.get("/todo", (req, res) => {
  res.json({
    data: "everthing is good",
  });
});

app.post("/todos/post", (req, res) => {
  res.json({
    data: "post",
  });
});
app.put("/todos/put", (req, res) => {
  res.json({
    data: "put",
  });
});
app.delete("/todos/delete", (req, res) => {
  res.json({
    data: "delete",
  });
});

app.listen(8000);
