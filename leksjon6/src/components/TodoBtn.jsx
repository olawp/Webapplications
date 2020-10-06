import React from 'react';

const TodoBtn = ({setState}) => {

    return (
        <div>
            <button onClick={() => setState(true)} id="todoBtn">+ Todo</button>
        </div>
    );
}

export default TodoBtn;