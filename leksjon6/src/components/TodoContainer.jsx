import React from "react";
import TodoCard from "./TodoCard";

const TodoContainer = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <section id="todoContainer" className="container">
      {todos && todos.length == 0 ? (
        <p className="jippi">Jippi! Ingen todos i dag</p>
      ) : (
        <TodoCard
          deleteTodo={deleteTodo}
          todos={todos}
          completeTodo={completeTodo}
        />
      )}
    </section>
  );
};

export default TodoContainer;
