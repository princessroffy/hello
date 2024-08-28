import React, { useState } from "react";

function Todolist() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="body">
      <h1 style={{ color: "black", fontSize: "100px", fontFamily: "cursive" }}>
        😍💕💕❤Todo List❤💕💕 😍
      </h1>
      <div className="girl">
        <input
          placeholder="next task"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="boy" onClick={() => addTodo(input)}>
          Add
        </button>
      </div>
      <ul className="set" type="square">
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button className="del" onClick={() => deleteTodo(todo.id)}>
              del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
