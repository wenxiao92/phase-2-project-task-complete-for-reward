import React from 'react'
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

function TaskPage({allTasks}) {
  const displayTasks = allTasks.map((task) => (
    <TaskList 
    key = {task.id}
    tasks = {task}
    />
  ))

  //for styling
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes=useStyles()
  //for styling

  return (
    
    <div>
    <TaskForm />
    <h1 align="center">Display Tasks!</h1>
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
    <TableHead>
        <TableRow>
          <TableCell>Tasks</TableCell>
          <TableCell align="right">Frequency</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Reward</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
    </TableHead>
        {displayTasks}


    </Table>
  </TableContainer>

    </div>
  )
}

export default TaskPage