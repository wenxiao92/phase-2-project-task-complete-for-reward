import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <h3>Add a Task!</h3>
      <form>
      <input
        type="text"
        placeholder="task"
        value=""
      />
      <input
        type="text"
      />
    </form>
    </div>
  )
}

export default CreateTask