import React from 'react'
import NavBar from './NavBar'
import Home from './Home';
import TaskPage from './TaskPage.js';
import RewardRedemption from './RewardRedemption.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/rewards" element={<RewardRedemption />} />
        </Routes>
        </BrowserRouter>

  );
}

export default App;
