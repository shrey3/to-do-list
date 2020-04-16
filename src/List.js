/* eslint-disable react/prop-types */
import React from 'react'

class List extends React.Component {
  textStyle(checked) {
    console.log(checked)
    return { textDecoration: checked ? 'line-through' : 'none' }
  }

  render() {
    const { todos, deleteTodo, handletodoCheck } = this.props

    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div
            className="collection-item"
            key={todo.id}
            onClick={() => {
              deleteTodo(todo.id)
            }}
          >
            <div className="item-checkbox">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handletodoCheck(todo)}
              />
              <React.Fragment>
                <span style={this.textStyle(todo.checked)}>{todo.content}</span>
              </React.Fragment>
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
