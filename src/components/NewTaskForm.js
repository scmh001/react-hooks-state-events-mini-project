import React, { useState } from 'react';
import { CATEGORIES } from '../data';

function NewTaskForm({ onTaskFormSubmit, categories = CATEGORIES })  {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(CATEGORIES[1]); // Assuming 'All' is at index 0

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text: taskText, category: taskCategory });
    setTaskText('');
    setTaskCategory(CATEGORIES[1]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
            {categories.map((category, index) => (
            index > 0 && <option key={category} value={category}>{category}</option>
  ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;