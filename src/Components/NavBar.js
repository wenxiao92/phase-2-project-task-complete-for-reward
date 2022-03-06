import React from 'react'
import {Route, useRouteMatch} from "react-router-dom";
import Home from './Home';
import TaskPage from './TaskPage.js';
import RewardRedemption from './RewardRedemption.js';

function NavBar(){
    return (
        <div className="App">
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/tasks"> <TaskPage /> </Route>
          <Route exact path="/rewards"> <RewardRedemption/> </Route>
        </div>
      );
}

export default NavBar