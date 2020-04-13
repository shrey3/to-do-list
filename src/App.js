/* eslint-disable */

import React from 'react'
import { hot } from 'react-hot-loader'
import Todo from './Todo'
import TodoList from './TodoList'
import TodoApp from './TodoApp'

class App extends React.Component {
  render() {
    return (
      <div className="header">
        <TodoApp />
      </div>
    )
  }
}

export default hot(module)(App)
