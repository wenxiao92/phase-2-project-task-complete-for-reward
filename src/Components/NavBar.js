import React from 'react'
import {Link } from "react-router-dom"


function NavBar(){
        return (
            <nav>
                 <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/tasks"> Tasks </Link></li>
                <li><Link to="/rewards"> Rewards </Link></li>
                </ul>
            </nav>
        );
      
}

export default NavBar