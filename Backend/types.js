const zod = require("zod");

const createTodo = zod.object({
  text: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.number(),
});

module.export = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
