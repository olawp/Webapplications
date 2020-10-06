import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TodoBtn from "./components/TodoBtn";
import Modal from "./components/Modal";
import Title from "./components/Title";
import TodoContainer from "./components/TodoContainer";
import CompletedList from "./components/CompletedList";

const App = () => {
  const [modalState, setModalState] = useState(false);
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [data, setData] = useState({title: "", desc: "", author: ""});

  const addTodo = () => {
    setTodos((item) => [{ id: todos.length, ...data }, ...item]);
  };

  const deleteTodo = (id) => {
    const update = todos.filter((todo) => todo.id !== id);
    setTodos(update);
  };

  const completeTodo = (id) => {
    const addCompletedTodoToList = todos.filter((todo) => todo.id === id);
    setCompleted(addCompletedTodoToList.concat(completed));
  };

  return (
    <main>
      <Navbar />
      <TodoBtn modalState={modalState} setModalState={setModalState} />
      {modalState && (
        <Modal
          setData={setData}
          modalState={modalState}
          setModalState={setModalState}
          addTodo={addTodo}
        />
      )}

      <TodoContainer
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <Title />
      <CompletedList completed={completed} />
    </main>
  );
};

export default App;
