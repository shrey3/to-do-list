/* eslint-disable */

import React from 'react'
import { hot } from 'react-hot-loader'
import TodoList from './TodoList'

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default hot(module)(App)
