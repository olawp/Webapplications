import React from "react";
import TodoCard from "./TodoCard";

const TodoContainer = ({ todoArr, completeTodo, deleteTodo }) => {
  return (
    <section id="todoContainer" className="container">
      {todoArr && todoArr.length == 0 ? (
        <p className="jippi">Jippi! Ingen todos i dag</p>
      ) : (
        <TodoCard
          deleteTodo={deleteTodo}
          todoArr={todoArr}
          completeTodo={completeTodo}
        />
      )}
    </section>
  );
};

export default TodoContainer;
