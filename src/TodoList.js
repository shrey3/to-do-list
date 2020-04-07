import React from 'react'
import TodoItems from './TodoItems'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
  }

  addItem(e) {
    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        }
      })
    }

    this._inputElement.value = ''
    // eslint-disable-next-line no-console
    console.log(this.state.items)

    e.preventDefault()
  }

  render() {
    return (
      <div className="todoList">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="Enter Task"
            ></input>
            <button type="submit"> Add </button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    )
  }
}
