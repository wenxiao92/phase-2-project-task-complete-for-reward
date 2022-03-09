import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const TaskList = ({tasks, onUpdateTask}) => {

  const {taskName, currency, frequency, status, date, id} = tasks

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
            <TableCell align="left">{date}</TableCell>
            <TableCell align="center">{currency}</TableCell>
            <TableCell align="center">{frequency}</TableCell>
            <TableCell align="center">      
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