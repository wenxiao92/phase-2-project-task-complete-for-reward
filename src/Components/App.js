import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Home from './Home';
import TaskPage from './TaskPage.js';
import RewardRedemption from './RewardRedemption.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  const [tasks, setTasks] = useState([])
  const [currency, setCurrency] = useState(0)
  const [displayState, setDisplayState] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3001/task")
    .then(r => r.json())
    .then((data) => setTasks(data))
  },[])

  //handles the status of the task (whether it's completed or not). Where the ckbox
  //is checked when completed
  function handleUpdate(updatedTask){
    //console.log(updatedTask)
    const updateTaskArray = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTasks(updateTaskArray);
    setCurrency((money) => money+parseInt(updatedTask.currency))
    console.log(currency)
  }

  //console.log(displayState)
  function handleTaskDisplay(){
    setDisplayState((toggle) => !toggle)
  }

  //handles updating page for new added tasks
  function handleUpdateTaskList(updatedTask){
    let newTaskArray = [...tasks, updatedTask]
    setTasks(newTaskArray);
  }
  

  //filter all tasks vs outstanding tasks based on status
  let filterActiveTask = tasks
  if(displayState === true) {
  filterActiveTask = tasks.filter((task) => task.status === false)}

  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskPage allTasks={filterActiveTask} onUpdateTask={handleUpdate} onHandleDisplay={handleTaskDisplay} switchStatus={displayState} onUpdateTaskList={handleUpdateTaskList}/>} />
          <Route path="/rewards" element={<RewardRedemption wallet={currency}/>} />
        </Routes>
        </BrowserRouter>

  );
}

export default App;
