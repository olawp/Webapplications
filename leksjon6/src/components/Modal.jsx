import React, { useState } from "react";

const Modal = ({ addTodo, state, setState, updateData, data}) => {
  const [charCount, setCharCount] = useState(50);
  const maxChars = 50;
  const icon = "\u00D7";

  const charHandler = (e) => {
    changeHandler(e);
    setCharCount(maxChars - e.target.value.length);
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;
    updateData(item => ({
      ...item,
      [id]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setState(!state);
    addTodo();
    updateData({title: '',
     desc: '',
    author: ''});
  };

  return (
    <div id="modal" className="modal">
    <form name="todoForm" className="modal-content" onSubmit={submitHandler}>
        <div className="modaltop">
            <p>New todo</p>
            <span className="exit" onClick={() => setState(!state)}>{icon}</span>
        </div>  
        <div className="modalbottom">
            <label htmlFor="title"  id="titleLabel">Title</label>
            <input type="text"  id="title" onChange={changeHandler}></input>

            <label htmlFor="descText" id="descLabel">Description <span id="chars">{charCount} characters remaining</span></label>
            <input id="desc" maxLength="50" onChange={charHandler}></input>
            
            <label htmlFor="authorText" id="authorLabel">Author</label>
            <input type="text" id="author" onChange={changeHandler}></input>

            <button type="submit" id="createBtn" onClick={submitHandler}>Create</button>
        </div>
    </form>
    </div>
  );
};

export default Modal;

