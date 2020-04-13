import React from 'react'
import PropTypes from 'prop-types'

// const testData = [
//   { id: 1, input: 'milk', completed: false },
//   { id: 2, input: 'eggs', completed: false },
//   { id: 3, input: 'cheese', completed: false }
// ]
export default class Todo extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    listId: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onTodoUpdate: PropTypes.func.isRequired,
    onTodoDelete: PropTypes.func.isRequired
  }

  onSelectChange = e => {
    this.update(e.target.checked)
  }

  render() {
    ;<li>
      <label>
        <input
          type="checkbox"
          onChange={this.onSelectChange}
          checked={this.props.completed}
        />
      </label>
    </li>
  }
}
