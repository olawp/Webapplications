import React from 'react';

const TodoBtn = ({setState}) => {
    const text = "+ Todo";

    return (
        <div>
            <button onClick={() => setState(true)} id="todoBtn">{text}</button>
        </div>
    );
}

export default TodoBtn;