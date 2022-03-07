import React from 'react'
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';

function TaskPage({allTasks}) {
  const displayTasks = allTasks.map((task) => (
    <TaskList 
    key = {task.id}
    tasks = {task}
    />
  ))
  

  return (
    <div>
    <TaskForm />
    {displayTasks}
    </div>
  )
}

export default TaskPage