
import { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputes] = useState({});

  const handleAddToDo = () => {
    if (headingInput.trim() != '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  }

const handleDeleteTodo=(index)=>{

}

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}
          />
          <button className="add-list-button" onClick={handleAddToDo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((item, index) => (
          <div key={index} className='todo-card'>
            <div className='heading_todo'>
              <h3>{item.heading}</h3>
              <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>delete Heading</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
