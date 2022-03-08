import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Home from './Home';
import TaskPage from './TaskPage.js';
import RewardRedemption from './RewardRedemption.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  const [tasks, setTasks] = useState([])
  const [currency, setCurrency] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3001/task")
    .then(r => r.json())
    .then((data) => setTasks(data))
  },[])

  //handles the status of the task (whether it's completed or not). Where the ckbox
  //is checked when completed
  function handleUpdate(updatedTask){
    console.log(updatedTask)
    const updateTaskArray = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTasks(updateTaskArray);
  }


  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskPage allTasks={tasks} onUpdateTask={handleUpdate}/>} />
          <Route path="/rewards" element={<RewardRedemption />} />
        </Routes>
        </BrowserRouter>

  );
}

export default App;
