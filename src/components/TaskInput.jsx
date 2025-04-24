import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleAddClick = () => {
    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
        className="input-text"
      />
      <button className="btn-add" onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default TaskInput;
