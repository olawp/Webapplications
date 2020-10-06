import React from "react";

const TodoBtn = ({ setModalState }) => {
  return (
    <div>
      <button onClick={() => setModalState(true)} id="todoBtn">
        + Todo
      </button>
    </div>
  );
};

export default TodoBtn;
