import React from 'react'
import TodoList from './TodoList'

export default class TodoApp extends React.Component {
  state = {
    todoLists: []
  }

  addnewtodoList = e => {
    const todoLists = this.state.todoLists.concat()
    todoLists.push({
      id: this.state.todoLists.length,
      title: 'New to-do List',
      items: []
    })

    this.setState({ todoLists })
  }

  addnewTodo = id => {
    const todoLists = this.state.todoLists.concat()
    const todoList = todoLists[id].items.concat()

    todoList.push({
      id: todoList.length,
      label: 'New to-do',
      completed: false
    })

    todoList[id].items = todoList

    this.setState({ todoLists })

    console.log(todoLists)
  }

  //   updateTodo = (listId, id, value, completed) => {
  //     const todoLists = this.state.todoLists.concat()
  //     const todoList = todoLists[listId].items.concat()
  //     todoList[id] = {
  //       ...todoList[id],
  //       label: value,
  //       completed
  //     }
  //     todoLists[listId].items = todoList
  //     this.setState({
  //       todoLists
  //     })
  //   }

  render() {
    return (
      <div className="TodoApp">
        <h1>TodoApp</h1>
        <p>Add a new to-do List</p>
        <button onClick={this.addnewtodoList}>Add new List</button>
        {this.state.todoLists.map(list => (
          <TodoList
            key={`todo-list-${list.id}`}
            id={list.id}
            title={list.title}
            items={list.items}
            addnewTodo={this.addnewTodo}
          />
        ))}
      </div>
    )
  }
}
