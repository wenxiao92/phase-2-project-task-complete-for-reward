import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const TaskList = ({tasks, onUpdateTask}) => {

  const {taskName, tickets, frequency, status, date, id} = tasks

    function handleChange(){
        fetch(`http://localhost:3001/task/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'status': !status}),
        })
        .then((r) => r.json())
        .then((taskUpdated) => {onUpdateTask(taskUpdated)})
    }

  return (
    <TableBody>
    <TableRow>
            <TableCell component="th" scope="row">
            {taskName}
            </TableCell>
            <TableCell align="right">{frequency}</TableCell>
            <TableCell align="right">{date}</TableCell>
            <TableCell align="right">{tickets}</TableCell>
            <TableCell align="right">      
                <Checkbox
                    checked={status}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </TableCell>
            </TableRow>
        </TableBody>

  )
}

export default TaskList