
import { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputes] = useState({});

  const handleAddToDo = () => {
    if (!headingInput.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      heading: headingInput,
      list: []
    };

    setTodos(prev => [...prev, newTodo]);
    setHeadingInput("");
  }

  const handleDeleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id != id))

    /*const newTodos = [...todos]; newTodos.splice(index, 1); setTodos(newTodos); this works but not recommended it can mutate the array */
  }

  const handleAddList = (id) => {
    const text = listInputs[id]?.trim();
    if (!text) return;

    setTodos(prev => prev.map(todos => todos.id === id
      ? { ...todos, list: [...todos.list, text] }
      : todos
    ))

    /*if (listInputs.trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].list.push(listInputs);
      setTodos(newTodos);
      setListInputes("");
    } work but there us better way*/
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
        {todos.map((todo) => (
          <div key={todo.id} className='todo-card'>
            <div className='heading_todo'>
              <h3>{todo.heading}</h3>
              <button className='delete-button-heading' onClick={() => handleDeleteTodo(todo.id)}>delete Heading</button>
            </div>
            <div className='add_list'>
              <ul>
                {todo.list.map((item, index) => (
                  <li key={index} className='todo_inside_list'>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                className='list-input'
                placeholder='Add List'
                value={listInputs[todo.id] || ""}
                onChange={e => setListInputes(prev => ({ ...prev, [todo.id]: e.target.value }))}
              />
              <button className='add-list-button' onClick={() => handleAddList(todo.id)}>Add List</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
