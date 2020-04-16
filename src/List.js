/* eslint-disable react/prop-types */
import React from 'react'

class List extends React.Component {
  textStyle(completed) {
    //console.log(completed)
    return { textDecoration: completed ? 'none' : 'line-through' }
  }

  render() {
    const { todos, deleteTodo, handletodoCheck } = this.props

    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <div className="item-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handletodoCheck(todo)}
                />
                <span style={this.textStyle(todo.checked)}>{todo.content}</span>
              </label>

              <button
                className="right"
                onClick={() => {
                  deleteTodo(todo.id)
                }}
              >
                x{' '}
              </button>
            </div>
          </div>
        )
      })
    ) : (
      <p className="center"> you have no todos left, yay! </p>
    )

    return <div className="todos collection">{todoList}</div>
  }
}

export default List
