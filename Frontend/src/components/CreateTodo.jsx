import React, { useRef } from "react";

const CreateTodo = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleClick = async () => {
    let data = await fetch("http://localhost:8000/todos/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      }),
    });
    let response = await data.json();
    alert("data added");
  };

  return (
    <div>
      <input type="text" ref={titleRef} placeholder="Title" />
      <input type="text" ref={descriptionRef} placeholder="Description" />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default CreateTodo;
