import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const Todo = () => {
  // Most important Hook's rule is they have to be
  // on the top level in the function.
  const [todoName, setTodoName] = useState('')
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // this hook will be executed every time the component is rendered
    axios.get('https://react-hooks-1.firebaseio.com/todos.json')
      .then(result => {
        const todoData = result.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({ id: key, name: todoData[key].name });
        }
        setTodoList(todos)
      })
      .catch(err => console.log(err))
  }, [todoName])
  // with empty array, you are doing componentDidMount()
  // with array full, you are doing componentDidMount() + componentDidUpdate()

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value)
  }

  const todoAddHandler = () => {
    axios.post('https://react-hooks-1.firebaseio.com/todos.json', { name: todoName })
      .then(result => {
        console.log(result)
        setTodoList(todoList.concat(todoName))
        setTodoName('')
      })
      .catch(err => console.log(err))
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
          todoList.length !== 0 ? todoList.map((todo, i) => <li key={i}>{todo.name}</li>) : <p>Loading todo's.....</p>
        }
      </ul>
    </Fragment>
  )
}

export default Todo
