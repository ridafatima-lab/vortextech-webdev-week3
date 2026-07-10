import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed === '') return;

    onAddTask({
      id: Date.now(),
      text: trimmed,
      completed: false,
    });
    setInputValue('');
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What do you need to do?"
        aria-label="New task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
