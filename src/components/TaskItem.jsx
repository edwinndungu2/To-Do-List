import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}
      <div className="task-actions">
        <button onClick={() => setIsEditing(true)}>✏️</button>
        <button onClick={() => onDelete(task.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskItem;
