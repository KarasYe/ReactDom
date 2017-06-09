import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          cursor: completed ? 'default' : 'pointer'
        }}
      >
        {text}
        <input type="checkbox" defaultChecked={completed}/>
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
