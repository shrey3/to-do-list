import Todo from './Todo'
import React from 'react'
import PropTypes from 'prop-types'

export default class TodoList extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    items: PropTypes.array
  }

  addnewTodo = e => {
    this.props.addnewTodo(this.props.id)
  }

  render() {
    let items = []

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {items.map(item => (
            <Todo
              id={item.id}
              listId={this.props.id}
              key={`todo-${this.props.id}-${item.id}`}
              completed={item.completed}
              label={item.label}
            />
          ))}
        </ul>

        <button onClick={this.addnewTodo}>Add to do</button>
      </div>
    )
  }
}
