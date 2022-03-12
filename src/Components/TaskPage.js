import React from 'react'
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Switch from '@material-ui/core/Switch';

//for styling
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

function TaskPage({allTasks, onUpdateTask, onHandleDisplay, switchStatus, onUpdateTaskList}) {
  const displayTasks = allTasks.map((task) => (
    <TaskList 
    key = {task.id}
    tasks = {task}
    onUpdateTask = {onUpdateTask}
    />
  ))

  const classes=useStyles()

  return (
    <div>
    <h1 align="center">Task Page</h1>
    <TaskForm onUpdateTaskList={onUpdateTaskList}/>
    <p>{/* for spacing*/}</p>
    <div align="center">Show All Tasks
      <Switch 
        checked={switchStatus}
        onClick={onHandleDisplay}
        color="default"
        name="checkedB"
        inputProps={{ 'aria-label': 'default checkbox' }}
      /> Show Outstanding Tasks</div>
      <p>{/* for spacing*/}</p>
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
    <TableHead>
        <TableRow>
          <StyledTableCell>Tasks</StyledTableCell>
          <StyledTableCell align="left">Date</StyledTableCell>
          <StyledTableCell align="center">Reward</StyledTableCell>
          <StyledTableCell align="center">Frequency</StyledTableCell>
          <StyledTableCell align="center">Status</StyledTableCell>
        </TableRow>
    </TableHead>
        {displayTasks}
    </Table>
  </TableContainer>

    </div>
  )
}

export default TaskPage