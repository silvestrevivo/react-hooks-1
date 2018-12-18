import React, { Fragment, useState } from 'react'

const Todo = () => {

  const [todoName, setTodoName] = useState('')

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value)
  }

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName} />
      <button type="button">Add</button>
      <ul>
        <li></li>
      </ul>
    </Fragment>
  )
}

export default Todo
