import React from "react";

const Todos = (props) => {
  let { data } = props.todos;
  console.log(data);
  return (
    <div>
      {data.map((todo) => {
        return (
          <div>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
