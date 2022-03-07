import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

const TaskList = ({tasks}) => {

  const {taskName, tickets, status} = tasks
  return (
    // <div>
    //   <h3>{taskName}</h3>
    // </div>
    <TableBody>
    <TableRow>
            <TableCell component="th" scope="row">
            dummydata
            </TableCell>
            <TableCell align="right">dummydata</TableCell>
            <TableCell align="right">dummydata</TableCell>
            <TableCell align="right">dummydata</TableCell>
            <TableCell align="right">dummydata</TableCell>
            </TableRow>
        </TableBody>

  )
}

export default TaskList