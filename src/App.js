import React, { useState } from "react";
import "./App.css"; 
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <div className="container">
      <h1 className="title">To Do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default App;

