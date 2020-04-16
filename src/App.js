/* eslint-disable */

import React, { useState } from 'react'
import AddTodo from './AddTodo'
import { hot } from 'react-hot-loader'
import List from './List'

class App extends React.Component {
  state = {
    todos: [{ id: 1, content: 'buy milk', completed: false }]
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos })
  }

  addTodo = todo => {
    todo.id = Math.random()
    todo.completed = false
    let todos = [...this.state.todos, todo]
    this.setState({ todos })
  }

  handletodoCheck = ({ content, checked }) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.content === content ? { content, checked: !checked } : todo
      )
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo App</h1>
        <AddTodo addTodo={this.addTodo} />
        <List
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          handletodoCheck={this.handletodoCheck}
        />
      </div>
    )
  }
}

export default hot(module)(App)
