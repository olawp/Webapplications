import React from 'react';
import TodoCard from './TodoCard';

const TodoContainer = ({todoArr, completeTodo, deleteTodo}) => {
    return(
        <section id="todoContainer" className="container">
            {todoArr && todoArr.length < 1 ? (
                <p>Jippi! Ingen todos i dag</p>
            ): (
                <TodoCard deleteTodo={deleteTodo} todoArr={todoArr} completeTodo={completeTodo}/>
            )}
        </section>
    )
}


export default TodoContainer;
