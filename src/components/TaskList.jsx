import React from "react";
import TaskItem from "./TaskItem.jsx"; 

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
