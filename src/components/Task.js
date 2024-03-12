import React from "react";
import PropTypes from "prop-types";

function Task({ text, category, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDeleteTask(text)}>Delete</button>
    </div>
  );
}



Task.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;