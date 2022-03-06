import React from 'react'
import {Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavBar(){
    const classes = useStyles();
        return (
            // <nav>
            //      <ul>
            //     <li><Link to="/"> Home </Link></li>
            //     <li><Link to="/tasks"> Tasks </Link></li>
            //     <li><Link to="/rewards"> Rewards </Link></li>
            //     </ul>
            // </nav>
            <div className={classes.root}>
            <AppBar position="static">
            <Container>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                <Button color="inherit" component={Link} to="/">Home</Button>
                </Typography>
                <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
                <Button color="inherit" component={Link} to="/rewards">Rewards</Button>
              </Toolbar>
              </Container>
            </AppBar>
          </div>
        );
      
}

export default NavBar