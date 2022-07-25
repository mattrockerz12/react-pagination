import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";

const TodoForm = ({ todos, setTodos }) => {
  console.log("Todo Form rendered");

  const [todo, setTodo] = useState({
    title: "",
  });

  const saveTodo = async (todo) => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos/",
      todo
    );

    setTodos([...todos, { ...data }]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    saveTodo(todo);
  };

  return (
    <>
      <h1>{todo.title}</h1>
      <form onSubmit={handleSave}>
        <Input todo={todo} label="Title" onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
};

export default TodoForm;
