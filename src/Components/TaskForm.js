import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function TaskForm({onUpdateTaskList}) {
//for styling
const classes = useStyles();
//for dropdown
const currencies = ['Daily','Weekly','Monthly','Quarterly','Annually','Ideally Often'];

//handles the form's data
const [formData, setFormData] = useState({
    taskName: "",
    date: "",
    currency: false,
})

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value,})
    
  };


//handles storing value of dropdown
const [dropDown, setDropDown] = useState("")
function handleSelectChange(event) {
    setDropDown(event.target.value);
  };

  function handleSubmit(e){
      e.preventDefault()
      //console.log(formData)
      fetch('http://localhost:3001/task',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        "status": false,
        "frequency": dropDown
      }),
    })
    .then((r) => r.json())
    .then((data) => onUpdateTaskList(data));
  }


  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          id="filled-task"
          label="Task"
          variant="filled"
          name="taskName"
          onChange={handleChange}
          value={formData.taskName}
        />
        <TextField
          id="filled-Date"
          label="Date"
          variant="filled"
          name="date"
          onChange={handleChange}
          value={formData.date}
        />
        <TextField
          id="filled-number"
          label="Reward"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          name="currency"
          onChange={handleChange}
          value={formData.currency}
        />
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={dropDown}
          onChange={handleSelectChange}
          variant="filled"
        >
            <MenuItem value=""> <em>None</em></MenuItem>
          {currencies.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" type="submit">Submit</Button>
      </div>
    </form>
    
  );
}



export default TaskForm