import React from 'react'

export default class TodoItems extends React.Component {
  createTasks(item) {
    return (
      //<li key={item.key}>{item.text}</li>)
      <li key={item.key}>
        <form>
          <label>
            {item.text}
            <input
              name="items"
              type="checkbox"
              checked={<del>{item.text}</del>}
              //onChange = {}
            />
          </label>
        </form>
      </li>
    )
  }

  render() {
    var todoEntries = this.props.entries
    var listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
