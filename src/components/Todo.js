import React, { Fragment, useState } from 'react'

const Todo = () => {

  const [todoName, setTodoName] = useState('')
  const [todoList, setTodoList] = useState([]);

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value)
  }

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName))
    setTodoName('')
  }

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName} />
      <button type="button" onClick={todoAddHandler}>Add</button>
      <ul>
        {
          todoList.map((todo, i) => <li key={i}>{todo}</li>)
        }
      </ul>
    </Fragment>
  )
}

export default Todo
