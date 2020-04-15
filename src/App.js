/* eslint-disable */

import React, { useState } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: 'buy milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({ todos })
  }

  addTodo = todo => {
    todo.id = Math.random()

    let todos = [...this.state.todos, todo]

    this.setState({ todos })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo App</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default hot(module)(App)
