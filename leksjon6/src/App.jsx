import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TodoBtn from "./components/TodoBtn";
import Modal from "./components/Modal";
import Title from "./components/Title";
import TodoContainer from "./components/TodoContainer";
import CompletedList from "./components/CompletedList";


const App = () => {


    const [state, setState] = useState(false);
    const [todoArr, setTodoArr] = useState([]);
    const [completeArr, setCompleteArr] = useState([]);

    const [data, updateData] = useState({
        title: '',
        desc: '',
        author: ''
    });


    const addTodo = () => {
        setTodoArr((item) => [{id: todoArr.length, ...data}, ...item]);
    }



    const deleteTodo = (id) => {
        const update = todoArr.filter((todo) => todo.id !== id);
        setTodoArr(update);
    }

    const completeTodo = (id) => {
        const addCompletedTodoToList = todoArr.filter((todo) => todo.id === id);
        setCompleteArr(addCompletedTodoToList.concat(completeArr));
    }


    return(
        <main>
        <Navbar/>
        <TodoBtn state={state} setState={setState}/>
        {state && (
        <Modal
          data={data} 
          updateData={updateData}
          state={state}
          setState={setState}
          addTodo={addTodo}
          />
        )}
        
        <TodoContainer
            data={data}
            updateData={updateData}
            todoArr={todoArr}
            setTodoArr={setTodoArr}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />

        <Title/>
        <CompletedList
            completeTodo={completeTodo}
            completeArr={completeArr}
            setCompleteArr={setCompleteArr}
        />

        </main>
    )


}

export default App;
