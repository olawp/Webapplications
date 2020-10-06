import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TodoBtn from "./components/TodoBtn";
import Modal from "./components/Modal";
import Title from "./components/Title";
import TodoContainer from "./components/TodoContainer";
import CompletedList from "./components/CompletedList";

const App = () => {
  const [modalState, setModalState] = useState(false);
  const [todoArr, setTodoArr] = useState([]);
  const [completeArr, setCompleteArr] = useState([]);

  const [data, updateData] = useState({title: "", desc: "", author: ""});

  const addTodo = () => {
    setTodoArr((item) => [{ id: todoArr.length, ...data }, ...item]);
  };

  const deleteTodo = (id) => {
    const update = todoArr.filter((todo) => todo.id !== id);
    setTodoArr(update);
  };

  const completeTodo = (id) => {
    const addCompletedTodoToList = todoArr.filter((todo) => todo.id === id);
    setCompleteArr(addCompletedTodoToList.concat(completeArr));
  };

  return (
    <main>
      <Navbar />
      <TodoBtn modalState={modalState} setModalState={setModalState} />
      {modalState && (
        <Modal
          updateData={updateData}
          modalState={modalState}
          setModalState={setModalState}
          addTodo={addTodo}
        />
      )}

      <TodoContainer
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <Title />
      <CompletedList completeArr={completeArr} />
    </main>
  );
};

export default App;
