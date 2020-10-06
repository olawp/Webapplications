import React from "react";

const TodoCard = ({ todoArr, deleteTodo, completeTodo }) => {
  return (
    <>
      {todoArr &&
        todoArr.length > 0 &&
        todoArr.map((data) => (
          <div className="todoElement" key={data.id}>
            <h1>{data.title}</h1>
            <p>Author: {data.author}</p>
            <p>{data.desc}</p>
            <div className="todoElementBtns">
              <button
                className="removeTodoBtn"
                onClick={() => deleteTodo(data.id)}
              >
                Delete
              </button>
              <button
                className="completeTodoBtn"
                onClick={() => {
                  completeTodo(data.id);
                  deleteTodo(data.id);
                }}
              >
                Complete
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoCard;
