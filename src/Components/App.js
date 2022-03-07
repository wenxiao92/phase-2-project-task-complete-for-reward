import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Home from './Home';
import TaskPage from './TaskPage.js';
import RewardRedemption from './RewardRedemption.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/task")
    .then(r => r.json())
    .then((data) => setTasks(data))
  },[])

  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskPage allTasks={tasks}/>} />
          <Route path="/rewards" element={<RewardRedemption />} />
        </Routes>
        </BrowserRouter>

  );
}

export default App;
