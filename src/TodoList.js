import React from 'react'
//import TodoItems from './TodoItems'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: '',
      items: [],
      completed: {
        0: true,
        1: false
      }
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //copy of current list of items
    const items = [...this.state.items]
    //add new item to list
    items.push(newItem)
    // console.log(items)

    this.setState({
      items,
      newItem: ''
    })
  }

  deleteItem(id) {
    //copy current items
    const items = [...this.state.items]

    const updatedItems = items.filter(items => items.id !== id)

    this.setState({ items: updatedItems })
  }

  handleCheck(index) {
    console.log(index)

    this.setState(state => ({
      completed: { ...state.completed, [index]: !state.completed[index] }
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="todoList">
          <h2>To-Do App</h2>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
          />
          <button name="addButton" onClick={() => this.addItem()}>
            {' '}
            Add{' '}
          </button>

          <ul>
            {this.state.items.map(item => {
              return (
                <li key={item.id}>
                  {/* <input id="chk" onChange={this.handleCheck} type="checkbox" /> */}

                  {item.value}

                  <button
                    className="delButton"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
